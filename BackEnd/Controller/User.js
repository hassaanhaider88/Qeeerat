import { GoogleLoginModal } from "../Modals/GoogleLogin.js";
export async function UserGoogleLoginController(req, res) {
  try {
    const { goolgeId, name, email, picture } = req.body;
    const newUser = await GoogleLoginModal.create({
      goolgeId,
      name,
      email,
      picture,
      methodOfLogin: "google",
      userName: name.split(" ").join("").toLowerCase(),
    });
    res.json({ success: true, message: "Google Login Successful", newUser });
  } catch (error) {
    res
      .json({
        success: false,
        message: "Error in Google Login",
        error: error.message,
      })
      .staus(500);
  }
}

export async function sendUserDataController(req, res) {
  try {
    const { userId } = req.body;
    const UserData = await GoogleLoginModal.findById(userId)
    res.json({
      success: true,
      message: "User Data Sent Successfully",
      UserData,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Error in Sending User Data",
      error: error.message,
    });
  }
}
