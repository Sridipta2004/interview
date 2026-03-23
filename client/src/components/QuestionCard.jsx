import React from "react";
import "../styles/QuestionCard.css";

const QuestionCard = ({ question, index, selectedAnswer, handleOption }) => {

return (

<div className="question-card">

<h3 className="question-title">
{index + 1}. {question.question}
</h3>

<div className="options">

{question.options.map((option,i)=>(
<label key={i} className="option">

<input
type="radio"
name={`question-${index}`}
value={option}
checked={selectedAnswer === option}
onChange={()=>handleOption(index,option)}
/>

<span>{option}</span>

</label>
))}

</div>

</div>

)

}

export default QuestionCard;