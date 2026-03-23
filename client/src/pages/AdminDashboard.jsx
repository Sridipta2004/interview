import React, { useState } from "react";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {

const [question,setQuestion] = useState("")
const [option1,setOption1] = useState("")
const [option2,setOption2] = useState("")
const [option3,setOption3] = useState("")
const [option4,setOption4] = useState("")
const [correctAnswer,setCorrectAnswer] = useState("")
const [skill,setSkill] = useState("")

const handleSubmit = async (e) => {

e.preventDefault()

const newQuestion = {

question,
options:[option1,option2,option3,option4],
correctAnswer,
skill

}

try{

const res = await fetch("http://localhost:5000/api/admin/add-question",{

method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization": `Bearer ${localStorage.getItem("token")}`
},

body:JSON.stringify(newQuestion)

})

const data = await res.json()

if(res.ok){

alert("Question Added Successfully ✅")

setQuestion("")
setOption1("")
setOption2("")
setOption3("")
setOption4("")
setCorrectAnswer("")
setSkill("")

}else{

alert(data.message)

}

}catch(error){

console.log(error)
alert("Server Error")

}

}

return(

<div className="admin-container">

<h1>Admin Dashboard</h1>

<p className="subtitle">
Add Interview Questions
</p>

<form className="question-form" onSubmit={handleSubmit}>

<textarea
placeholder="Enter Question"
value={question}
onChange={(e)=>setQuestion(e.target.value)}
required
/>

<input
type="text"
placeholder="Option 1"
value={option1}
onChange={(e)=>setOption1(e.target.value)}
required
/>

<input
type="text"
placeholder="Option 2"
value={option2}
onChange={(e)=>setOption2(e.target.value)}
required
/>

<input
type="text"
placeholder="Option 3"
value={option3}
onChange={(e)=>setOption3(e.target.value)}
required
/>

<input
type="text"
placeholder="Option 4"
value={option4}
onChange={(e)=>setOption4(e.target.value)}
required
/>

<input
type="text"
placeholder="Correct Answer"
value={correctAnswer}
onChange={(e)=>setCorrectAnswer(e.target.value)}
required
/>

<input
type="text"
placeholder="Skill (React, Node, JS)"
value={skill}
onChange={(e)=>setSkill(e.target.value)}
required
/>

<button type="submit">
Add Question
</button>

</form>

</div>

)

}

export default AdminDashboard