import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Signup.css";

const Signup = () => {

const navigate = useNavigate()

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [role,setRole] = useState("student")

const handleSignup = async (e) => {

e.preventDefault()

try{

const res = await fetch("http://localhost:5000/api/auth/signup",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name,
email,
password,
role
})

})

const data = await res.json()

if(res.ok){

alert("Signup successful 🎉")

navigate("/login")

}else{

alert(data.message)

}

}catch(error){

console.log(error)
alert("Server error")

}

}

return(

<div className="signup-page">

<div className="signup-card">

<h1>Interview Platform</h1>

<h2>Create Account</h2>

<form onSubmit={handleSignup}>

<div className="input-group">

<input
type="text"
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
required
/>

</div>

<div className="input-group">

<input
type="email"
placeholder="Email Address"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

</div>

<div className="input-group">

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
/>

</div>

<div className="input-group">

<select
value={role}
onChange={(e)=>setRole(e.target.value)}
>

<option value="student">Student</option>
<option value="admin">Admin</option>

</select>

</div>

<button className="signup-btn">
Create Account
</button>

</form>

<p className="login-text">

Already have an account?
<Link to="/login"> Login</Link>

</p>

</div>

</div>

)

}

export default Signup