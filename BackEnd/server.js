import express from "express";
import puppeteer from "puppeteer";

const app = express();

app.get("/download", async (req, res) => {
  const { bookSlug } = req.query;

  if (!bookSlug) {
    return res.status(400).send("Missing bookSlug parameter");
  }

  const bookUrl = `https://www.rekhta.org/ebooks/${bookSlug}`;

  try {
    console.log("Opening book page:", bookUrl);

    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.goto(bookUrl, { waitUntil: "networkidle2" });

    // Wait and click the "Download PDF" button (if available)
    const downloadButton = await page.$('a[href*="download"]');
    if (!downloadButton) {
      throw new Error("No download button found on page.");
    }

    const pdfLink = await page.evaluate(
      (el) => el.getAttribute("href"),
      downloadButton
    );

    await browser.close();

    if (!pdfLink) {
      return res.status(404).send("PDF link not found.");
    }

    // Redirect user to actual PDF URL
    return res.redirect(pdfLink);
  } catch (error) {
    console.error("Download error:", error.message);
    return res.status(500).send("Failed to fetch book.");
  }
});

app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));




// https://drive.google.com/file/d/1tPfvbYMyI9rfiu7nP72eaEpj46At4GSK/view?usp=sharing