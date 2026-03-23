import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  score: {
    type: Number,
    required: true
  },

  total: {
    type: Number,
    required: true
  },

  percentage: {
    type: Number
  },

  improvement: {
    type: [String]
  },

  answers: {
    type: [String]
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

const Result = mongoose.model("Result", resultSchema);

export default Result;