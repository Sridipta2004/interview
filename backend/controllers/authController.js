import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const signup = async (req,res)=>{

try{

const {name,email,password,role} = req.body;

const normalizedEmail = email.toLowerCase();

const hashedPassword = await bcrypt.hash(password,10);

const user = new User({
name,
email: normalizedEmail,
password: hashedPassword,
role
});

await user.save();

res.json({
message:"Signup successful"
});

}catch(err){
  if (err.code === 11000) {
    return res.status(400).json({message: "User already exists"});
  }
  if (err.name === 'CastError' || err.name === 'ValidationError') {
    return res.status(400).json({message: "Invalid data provided"});
  }
  console.error(`Signup error (${err.name}): ${err.message}`, err.stack);
  res.status(500).json({
    message: "Server error"
  });
}

};



export const login = async (req,res)=>{

try{

const {email,password} = req.body;

const user = await User.findOne({email});

if(!user){
return res.status(400).json({message:"User not found"});
}

const isMatch = await bcrypt.compare(password,user.password);

if(!isMatch){
return res.status(400).json({message:"Invalid password"});
}

const token = jwt.sign(
{id:user._id,role:user.role},
process.env.JWT_SECRET,
{expiresIn:"1d"}
);

res.json({
token,
user
});

}catch(err){

res.status(500).json({
message:err.message
});

}

};