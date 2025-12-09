import mongoose from "mongoose";

const googleLoginSechma = new mongoose.Schema(
  {
    goolgeId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    picture: { type: String },
    password: { type: String },
    methodOfLogin: { type: String, default: "google" },
    NumberOfFollower: { type: Number, default: 0 },
    NumberOfFollowing: { type: Number, default: 0 },
    Bio: { type: String, default: "" },
    Location: { type: String, default: "" },
    IsPro: { type: Boolean, default: false },
    VerifiedUser: { type: Boolean, default: false },
    AccountStatus: { type: String, default: "active" }, // 'active' | 'banned' | 'suspended'
    CreatedPost: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post"    },
    SavedPost: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    Following: { type: Array, default: [] },
    Follower: { type: Array, default: [] },
    Notifications: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Notification"
    },
  },
  { timestamps: true }
);

export const GoogleLoginModal = mongoose.model(
  "GoogleLogin",
  googleLoginSechma
);
