import express from "express";
import { UserGoogleLoginController , sendUserDataController} from "../Controller/User.js";
const router = express.Router();

// Google Login Route
router.post("/goolgelogin", UserGoogleLoginController);
router.post('/getuser',sendUserDataController);


export default router;
