import express from "express";
import { uploadImage } from "../Controller/Images.js";
const router = express.Router();

router.post("/upload", uploadImage);

export default router;