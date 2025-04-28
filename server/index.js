import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config({});

connectDB();
const app=express();

const PORT = process.env.port || 3000;
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true
})),
//API'S
app.use("/api/v1/user", userRoute);

app.listen(PORT , () => {
    console.log(`Server listen at port ${PORT}`);
})
