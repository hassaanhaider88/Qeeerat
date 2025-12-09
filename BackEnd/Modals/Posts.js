import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    videoUrl: { type: String, required: true },
    videoLikes: { type: Number, default: 0 },
    SurahName: { type: String, required: true },
    AyatFrom: { type: Number, required: true },
    AyatTo: { type: Number, required: true },
    videoCreatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "GoogleLogin",
      required: true,
    },
  },
  { timestamps: true }
);


const PostModal = mongoose.model("Post", postSchema);

export default PostModal;