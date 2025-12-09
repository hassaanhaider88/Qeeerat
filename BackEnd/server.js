import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import UserRoutes from "./Routes/User.js";
import ImagesRoutes from "./Routes/Images.js";
import cors from "cors";
dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();
connectDB();
app.use(cors());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("API Running"));

app.use("/api/user", UserRoutes);

app.use('/api/images',ImagesRoutes)

app.listen(PORT, () => {
  console.log("Server is live on port", PORT);
});
