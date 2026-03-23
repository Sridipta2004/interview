import React from "react";
import "../styles/ScoreCard.css";

const ScoreCard = ({ score, total, percentage, improvement }) => {

return (

<div className="score-card">

<h2>Interview Result</h2>

<div className="score-box">

<h1>{score} / {total}</h1>

<p className="percentage">
Percentage: {percentage}%
</p>

</div>

<div className="improvement-section">

<h3>Improvement Areas</h3>

{improvement && improvement.length > 0 ? (

<ul>
{improvement.map((item,index)=>(
<li key={index}>{item}</li>
))}
</ul>

) : (

<p className="great">Great job! No improvement needed.</p>

)}

</div>

</div>

)

}

export default ScoreCard