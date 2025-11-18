import express from "express";
import bookDownload from "rekhta-downloader-js";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  // res.send("Hello from the backend server!");
  const url =
    "https://www.rekhta.org/ebooks/bela-mein-mela-gadar-ki-mari-shahzadiyan-rashidul-khairi-ebooks?lang=ur";
 var ResData = bookDownload(url);
 res.json(ResData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
