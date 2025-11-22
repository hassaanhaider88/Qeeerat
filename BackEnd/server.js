import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
connectDB();


app.get("/", (req, res) => res.send("API Running"));

app.listen(PORT,()=>{
    console.log("Server is live on port",PORT)
});