import Question from "../models/Question.js";

export const addQuestion = async(req,res)=>{

try{

const {question,options,correctAnswer} = req.body;

const newQuestion = new Question({
question,
options,
correctAnswer
});

await newQuestion.save();

res.json({
message:"Question added successfully"
});

}catch(err){

res.status(500).json({
message:err.message
});

}

};



export const getAllQuestions = async(req,res)=>{

try{

const questions = await Question.find();

res.json(questions);

}catch(err){

res.status(500).json({
message:err.message
});

}

};