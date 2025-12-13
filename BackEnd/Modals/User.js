import mongoose from "mongoose";

const User = new mongoose.Schema(
  {
    goolgeId: { type: String },
    name: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    picture: { type: String },
    password: { type: String },
    methodOfLogin: { type: String, default: "google" }, // 'google' | 'email'
    Bio: { type: String, default: "" },
    Location: { type: String, default: "" },
    IsPro: { type: Boolean, default: false },
    VerifiedUser: { type: Boolean, default: false },
    AccountStatus: { type: String, default: "active" }, // 'active' | 'banned' | 'suspended'
    CreatedPost: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    SavedPost: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    // Following: { type: Array, default: [] },
    Followers: { type: Number, default: 0 },
    FollowerList: {
      type: Array,
      default: [],
    },

    Notifications: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Notification",
    },
  },
  { timestamps: true }
);

export const UserModal = mongoose.model("User", User);
