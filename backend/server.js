import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";
import interviewRoutes from "./routes/interview.js";
import resultRoutes from "./routes/result.js";

dotenv.config();

const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB Connected Successfully");
})
.catch((error)=>{
    console.log("MongoDB Connection Error:", error);
});


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/interview", interviewRoutes);
app.use("/api/result", resultRoutes);


// Test Route
app.get("/", (req,res)=>{
    res.send("Interview Platform Backend Running");
});


// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});
