import express from "express";
import { Movie, Scene } from "json2video-sdk";
import { youtube } from "ab-downloader";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello from the backend server!");
});

app.get("/down", async (req, res) => {
  // async function getPost(postId, accessToken) {
  const fields =
    "message,created_time,full_picture,attachments{subattachments,media,media_type,target,url}";
  const url = `https://graph.facebook.com/v24.0/${postId}?fields=${encodeURIComponent(
    fields
  )}&access_token=${accessToken}`;
  const res = await fetch(url);
  return res.data;
  // }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
