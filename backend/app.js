//require("dotenv").config();
import express from "express";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import mongoose from "mongoose";
import cors from "cors"
import testRoutes from "./src/routes/testRoute.js"
import authRoutes from "./src/routes/authRoutes.js";
import postRoutes from "./src/routes/postsRoutes.js";
dotenv.config({ path: "./.env" });
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors());
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use(limiter);


app.use("/test",testRoutes);
app.use("/auth",authRoutes);
app.use("/post",postRoutes);


app.use((err,req,res,next)=>{
  console.log(err);
  let statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    status:false,
    data:err.data || [],
    message:err.message || "Something went wrong........."
  })
})

mongoose
  .connect(process.env.DB_URL, {})
  .then(() => {
    console.log("DB connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
