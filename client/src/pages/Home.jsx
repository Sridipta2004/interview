import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {

const user = JSON.parse(localStorage.getItem("user"))

return (

<div className="home-container">

{/* Hero Section */}

<div className="hero">

<h1>AI Interview Preparation Platform</h1>

<p>
Practice technical interviews, improve your skills,
and get instant feedback on your performance.
</p>

{user?.role?.toLowerCase() === "student" && (
<Link to="/interview">
<button className="start-btn">
Start Interview
</button>
</Link>
)}

{user?.role?.toLowerCase() === "admin" && (
<Link to="/admin">
<button className="start-btn">
Go To Admin Dashboard
</button>
</Link>
)}

</div>

{/* Skills Section */}

<div className="skills-section">

<h2>Skills Covered</h2>

<div className="skills-grid">

<div className="skill-card">
<h3>JavaScript</h3>
<p>Master core concepts used in modern web development.</p>
</div>

<div className="skill-card">
<h3>React</h3>
<p>Practice component-based UI interview questions.</p>
</div>

<div className="skill-card">
<h3>Node.js</h3>
<p>Understand backend development and APIs.</p>
</div>

<div className="skill-card">
<h3>MongoDB</h3>
<p>Learn NoSQL database concepts used in real projects.</p>
</div>

<div className="skill-card">
<h3>Data Structures</h3>
<p>Practice algorithms frequently asked in interviews.</p>
</div>

<div className="skill-card">
<h3>System Design</h3>
<p>Learn scalable architecture for large systems.</p>
</div>

</div>

</div>

{/* Suggested Reading */}

<div className="reading-section">

<h2>Suggested Reading</h2>

<div className="reading-grid">

<div className="reading-card">
<h3>React Basics</h3>
<p>Learn components, props, and hooks.</p>
<a href="https://react.dev">Read More</a>
</div>

<div className="reading-card">
<h3>Node.js Guide</h3>
<p>Understand backend APIs and server development.</p>
<a href="https://nodejs.org">Read More</a>
</div>

<div className="reading-card">
<h3>MongoDB Concepts</h3>
<p>Learn document-based database structure.</p>
<a href="https://mongodb.com">Read More</a>
</div>

</div>

</div>

{/* Review Section */}

<div className="review-section">

<h2>Student Reviews</h2>

<div className="reviews">

<div className="review-card">
<p>
"This platform helped me prepare for my technical interviews."
</p>
<h4>- Rahul</h4>
</div>

<div className="review-card">
<p>
"The instant feedback feature is amazing!"
</p>
<h4>- Priya</h4>
</div>

<div className="review-card">
<p>
"I improved my React skills after practicing here."
</p>
<h4>- Arjun</h4>
</div>

</div>

</div>

</div>

)

}

export default Home