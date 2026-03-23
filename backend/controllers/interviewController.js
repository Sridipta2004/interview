import Question from "../models/Question.js";
import Result from "../models/Result.js";


// ===============================
// GET QUESTIONS
// ===============================
export const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();

    res.json({
      success: true,
      questions
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ===============================
// ADD QUESTION
// ===============================
export const addQuestion = async (req, res) => {
  try {
    const { question, options, correctAnswer, category } = req.body;

    const newQuestion = new Question({
      question,
      options,
      correctAnswer,
      category
    });

    await newQuestion.save();

    res.json({
      success: true,
      message: "Question added successfully"
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ===============================
// SUBMIT INTERVIEW
// ===============================
export const submitInterview = async (req, res) => {
  try {
    const { answers } = req.body;
    const userId = req.user.id;

    const questions = await Question.find();

    let score = 0;

    questions.forEach((q, index) => {
      if (q.correctAnswer === answers[index]) {
        score++;
      }
    });

    const result = new Result({
      user: userId,
      score,
      total: questions.length
    });

    await result.save();

    res.json({
      success: true,
      score,
      total: questions.length
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
