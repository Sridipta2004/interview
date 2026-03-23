import Question from "../models/Question.js";
import Result from "../models/Result.js";

export const submitInterview = async(req,res)=>{

try{

const {answers, userId, questions} = req.body;
let score = 0;
const weakAreas = { React: 0, Node: 0, DB: 0 };
questions.forEach((q, index) => {
  const userAnswer = answers[index];
  const isCorrect = userAnswer === q.correctAnswer;
  if (isCorrect) {
    score += 25;
  } else {
    const qLower = q.question.toLowerCase();
    if (qLower.includes('react') || qLower.includes('state')) weakAreas.React++;
    else if (qLower.includes('node') || qLower.includes('async')) weakAreas.Node++;
    else if (qLower.includes('mongo') || qLower.includes('db')) weakAreas.DB++;
  }
});
const total = questions.length * 25;
const percentage = Math.round((score / total) * 100);
const improvement = Object.entries(weakAreas)
  .filter(([_, count]) => count > 0)
  .map(([area]) => `${area} fundamentals`)
  .join(', ') || 'Excellent! Practice advanced topics.';
const result = new Result({
  userId,
  score,
  total,
  percentage,
  improvement
});

await result.save();

res.json(result);

}catch(err){

res.status(500).json({
message:err.message
});

}

};



export const getUserResults = async(req,res)=>{

try{

const results = await Result.find({
userId:req.params.userId
});

res.json(results);

}catch(err){

res.status(500).json({
message:err.message
});

}

};