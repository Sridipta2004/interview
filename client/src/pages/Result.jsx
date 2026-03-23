import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Result.css";

const Result = () => {

const location = useLocation()
const navigate = useNavigate()

const data = location.state

console.log('Result data:', data);

if(!data){
return (
<div className="result-container">
<h2>No Result Found</h2>
<button onClick={()=>navigate("/")}>Go Home</button>
</div>
)
}

const { score, total, percentage, improvement = [], isFallback = false } = data || {};

// Debug info (remove in production)
console.log('Raw result data:', data);

if (typeof score !== 'number' || typeof total !== 'number' || score === undefined || total === undefined) {
  return (
    <div className="result-container">
      <h2>❌ Invalid Score Data</h2>
      <details>
        <summary>Debug: Raw data</summary>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </details>
      <button onClick={()=>navigate("/")}>Go Home</button>
    </div>
  );
}

return(

<div className="result-container">

<h1>Interview Result</h1>

<div className="result-card">
{isFallback && (
    <div className="fallback-banner" style={{
      background: 'linear-gradient(135deg, #ff9a00, #ff6b00)', 
      padding: '15px', 
      marginBottom: '20px', 
      borderRadius: '12px',
      border: '2px solid #ffd700',
      boxShadow: '0 4px 12px rgba(255,107,0,0.3)'
    }}>
      <strong>⚠️ Demo Mode Active</strong><br/>
      Backend temporarily unavailable - using <em>advanced local AI scoring</em>
    </div>
  )}
  
  <h2>Your Score {isFallback ? '(Demo)' : ''}</h2>

  <div className="score-circle">
    {score} / {total}
  </div>

  <p className="percentage">
    Percentage: {typeof percentage === 'number' ? percentage + '%' : 'N/A'}
  </p>
</div>

<div className="improvement">

<h3>Improvement Areas</h3>

{improvement && improvement.length > 0 ? (

<ul>

{improvement.map((skill,index)=>(
<li key={index}>{skill}</li>
))}

</ul>

) : (

<p>Great job! No major improvement areas.</p>

)}

</div>

<div className="buttons">

<button onClick={()=>navigate("/interview")}>
Retake Interview
</button>

<button onClick={()=>navigate("/")}>
Go Home
</button>

</div>

</div>

)

}

export default Result