import { jwtDecode } from "jwt-decode";
import BACKEND_URI from "./BackEndURI";
import { Navigate } from "react-router-dom";

export const handleUserGoogleLoginORSingUp = async (credentialResponse) => {
  // here will be the logic for google login or sign up
  alert("Google Login/Sign Up Clicked");
  const decoded = jwtDecode(credentialResponse.credential);

  console.log("Login Success:", decoded);
  const { email, name, picture, sub } = decoded;
  try {
    const Res = await fetch(`${BACKEND_URI}/api/user/goolgelogin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        goolgeId: sub,
        name,
        email,
        picture,
      }),
    });
    const UserData = await Res.json();
    if (UserData.success) {
      return {
        success: true,
        message: "Google Login/Sign Up Successful",
        UserData: UserData.newUser,
      };
    } else {
      return {
        success: false,
        message: "Google Login/Sign Up Failed",
        UserData: UserData.newUser,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Error in Google Login/Sign Up",
      error: error.message,
    };
  }
};


export const sendUserData = async (userId) => {
  console.log(userId)
  try {
    const res = await fetch(`${BACKEND_URI}/api/user/getuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
      }),
    });
    const UserData = await res.json();
    if (UserData.success) {
      return {
        success: true,
        message: "User Data Sent Successfully",
        UserData: UserData.UserData,
      };
    } else {
      return {
        success: false,
        message: "Failed to Send User Data",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Error in Sending User Data",
      error: error.message,
    };
  }
};
