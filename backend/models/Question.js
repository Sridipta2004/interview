import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({

  question: {
    type: String,
    required: true
  },

  options: {
    type: [String],
    required: true
  },

  correctAnswer: {
    type: String,
    required: true
  },

  category: {
    type: String,
    default: "General"
  },

  difficulty: {
    type: String,
    enum: ["Easy","Medium","Hard"],
    default: "Easy"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

const Question = mongoose.model("Question", questionSchema);

export default Question;