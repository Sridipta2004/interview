import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Interview = () => {

  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);

  const storedUser = JSON.parse(localStorage.getItem("user") || "null");

  // FETCH QUESTIONS
  useEffect(() => {
    fetch("http://localhost:5000/api/interview/questions")
      .then(res => res.json())
      .then(data => {
        setQuestions(data.questions);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  // HANDLE OPTION
  const handleOption = (qIndex, option) => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = option;
    setAnswers(newAnswers);
  };

  // SUBMIT
  const handleSubmit = async () => {
    if (answers.length !== questions.length || answers.includes(undefined)) {
      alert("Please answer all questions");
      return;
    }

    if (!storedUser?._id && !storedUser?.id) {
      alert("Please log in before submitting the interview.");
      navigate("/login");
      return;
    }

    const userId = storedUser._id || storedUser.id;

    const res = await fetch("http://localhost:5000/api/interview/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({ answers, userId })
    });

    const data = await res.json();

    navigate("/result", { state: data });
  };


  if (loading) return <h2>Loading...</h2>;


  return (
    <div>
      <h1>Interview</h1>

      {questions.map((q, index) => (
        <div key={index}>
          <h3>{index + 1}. {q.question}</h3>

          {q.options.map((opt, i) => (
            <label key={i}>
              <input
                type="radio"
                name={`q${index}`}
                onChange={() => handleOption(index, opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Interview;
