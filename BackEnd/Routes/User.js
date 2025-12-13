import express from "express";
import { UserGoogleLoginController , ForGotPasswordController,sendUserDataController,UseerSignUpController, UserLoginViaPass, UserFollowOrUnFollowController} from "../Controller/User.js";
const router = express.Router();

// Google Login Route
router.post("/goolgelogin", UserGoogleLoginController);
router.post('/getuser',sendUserDataController);
// Create acount with emial and other credentials
router.post('/sign-up',UseerSignUpController)
router.post('/login',UserLoginViaPass)
router.post('/forgot-password',ForGotPasswordController) // get email and send OTP to email
router.post('/follow',UserFollowOrUnFollowController)




export default router;
