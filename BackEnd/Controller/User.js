import { UserModal } from "../Modals/User.js";
import { ComparePassword, UserPasswordHash } from "../utils/HashPassword.js";

export async function UserGoogleLoginController(req, res) {
  try {
    const { goolgeId, name, email, picture } = req.body;
    const existingUser = await UserModal.findOne({ email });
    if (existingUser.methodOfLogin == "email") {
      return res.json({
        success: false,
        message: `User already exists via Email/Password. Please login instead.`,
      });
    }
    if (existingUser) {
      return res.json({
        success: true,
        message: `User already exists please login via ${existingUser.methodOfLogin}`,
        UserData: existingUser,
      });
    }

    const newUser = await UserModal.create({
      goolgeId,
      name,
      email,
      picture,
      methodOfLogin: "google",
      userName: name.split(" ").join("").toLowerCase(),
    });
    res.json({
      success: true,
      message: "Google Login Successful",
      UserData: newUser,
    });
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
    const UserData = await UserModal.findById(userId);
    if (!UserData) {
      return res.json({
        success: false,
        message: "User not found",
      });
    } else {
      res.json({
        success: true,
        message: "User Data Sent Successfully",
        UserData,
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: "Error in Sending User Data",
      error: error.message,
    });
  }
}

export async function UseerSignUpController(req, res) {
  try {
    const { name, email, password, imageUrl } = req.body;

    if (!name || !email || !password) {
      return res.json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    // Check if user already exists
    const existingUser = await UserModal.findOne({ email });

    if (existingUser) {
      return res.json({
        success: false,
        message: `User already exists via ${existingUser.methodOfLogin}. Please login instead.`,
      });
    }

    // Hash password
    const hashedPassword = await UserPasswordHash(password);

    // Create user
    const createUser = await UserModal.create({
      name,
      email,
      userName: name.split(" ").join("").toLowerCase(),
      password: hashedPassword,
      picture: imageUrl || "",
      methodOfLogin: "email",
    });
    // Send response

    res.json({
      success: true,
      message: "User signed up successfully",
      userData: createUser._id,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Error creating user",
      error: error.message,
    });
  }
}

export async function UserLoginViaPass(req, res) {
  try {
    const { email, password } = req.body;
    const checkUserExist = await UserModal.findOne({ email });
    if (checkUserExist.methodOfLogin == "google") {
      return res.json({
        success: false,
        message: "This Email is Registered with Google",
      });
    }
    // verify password
    const isPasswordMatch = await ComparePassword(
      password,
      checkUserExist.password
    );
    if (isPasswordMatch) {
      return res.json({
        success: true,
        message: "user Login Successfully",
        userData: checkUserExist,
      });
    } else {
      return res.json({
        success: false,
        message: "user Login failed!!!",
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: "Error in Sending User Data",
      error: error.message,
    });
  }
}

export async function ForGotPasswordController(req, res) {
  try {
    const { email } = req.body;
    // the functionality to be implemented
    res.json({
      success: true,
      message: "Forgot Password Endpoint Reached",
      email,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Error in Forgot Password",
      error: error.message,
    });
  }
}

export async function UserFollowOrUnFollowController(req, res) {
  try {
    const { userId, action, followerId } = req.body;
    if (userId === followerId) {
      return res.status(400).json({
        success: false,
        message: "You cannot follow yourself",
      });
    }
    const user = await UserModal.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    if (action === "follow") {
      if (user.FollowerList.includes(followerId)) {
        return res.status(400).json({
          success: false,
          message: "User already followed",
        });
      }

      user.Followers += 1;
      user.FollowerList.push(followerId);

      await user.save();

      return res.json({
        success: true,
        message: "User followed successfully",
        user,
      });
    }

    // ================= UNFOLLOW =================
    if (action === "unfollow") {
      // ❌ Not following
      if (!user.FollowerList.includes(followerId)) {
        return res.status(400).json({
          success: false,
          message: "You are not following this user",
        });
      }

      user.Followers -= 1;
      user.FollowerList = user.FollowerList.filter(
        (id) => id.toString() !== followerId
      );

      await user.save();

      return res.json({
        success: true,
        message: "User unfollowed successfully",
        user,
      });
    }

    // ❌ Invalid action
    return res.status(400).json({
      success: false,
      message: "Invalid action type",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in Follow / Unfollow",
      error: error.message,
    });
  }
}

