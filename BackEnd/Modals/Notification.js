import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  description: { type: String, required: true },
  time: { type: Date, required: true },
  IsReaded: { type: Boolean, default: false },
});

const NotificationModal = mongoose.model("Notification", notificationSchema);

export default NotificationModal;
