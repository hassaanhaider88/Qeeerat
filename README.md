# Qeeerat — Short Quranic Verse Clips App

**Qeeerat** is a lightweight app for discovering short Quranic verse clips (30s–1m) with translations — perfect for sharing as WhatsApp or Instagram status videos.
The **frontend** is built with **React + Vite**, and the **backend** is a minimal **Express.js** helper for data fetching and future expansion.

---

## 🌙 Key Features

* 🎧 **Short Quranic Clips** — 30s–1m recitations with translation overlays.
* 🎬 **Custom Video Player** — built with React, featuring hover preview and click-to-play/pause.
* ❤️ **Engagement Actions** — like, save, and share status-ready clips.
* ⚡ **Lightweight Feed UI** — optimized for quick scroll and playback.
* 🧩 **Modular Components** — easily extend sources, add translations, or integrate authentication.

---

## 🧱 Project Structure

```
Qeeerat/
│
├── FrontEnd/
│   ├── src/
│   │   ├── Components/
│   │   │   ├── CustomVideoTag.jsx          # Custom player with hover-seek & progress
│   │   │   ├── HomeFeedPost.jsx            # Individual post component
│   │   │   └── SingleVideoCard.jsx         # Video card with like/save/share
│   │   ├── Pages/
│   │   │   └── HomeFeed.jsx                # Main feed view using PostData
│   │   ├── DummyData/
│   │   │   └── PostData.js                 # Sample data for demo feed
│   │   └── index.css                       # Global styles (Tailwind-based)
│   ├── package.json
│   └── vite.config.js
│
└── BackEnd/
    ├── server.js                           # Example Express.js helper
    └── package.json
```

---

## ⚙️ Quick Start

### 1. Clone the repository

```bash
git clone <repo-url>
cd Qeeerat
```

### 2. Setup Frontend

```bash
cd FrontEnd
npm install
npm run dev
```

The app will start on your local Vite server.

### 3. (Optional) Setup Backend

```bash
cd ../BackEnd
npm install
npm run dev
```

This runs the example Express server for future API integrations.

---

## 🕋 Data Model

Each post (clip) in `PostData.js` follows this structure:

```js
{
  videoUrl: "https://your-video-url.mp4",
  SurahName: "Al-Fatiha",
  AyatFrom: 1,
  AyatTo: 7,
  translation: "In the name of Allah, the Most Gracious, the Most Merciful...",
  videoLikes: 245,
  videoCreated: {
    userName: "Admin",
    userProfile: "/images/profile.png"
  }
}
```

---

## 🧩 Extend or Customize

* Add translation fields to each post and render them dynamically.
* Limit clips to **30–60 seconds** for best performance and social sharing.
* Replace dummy data with live content via your API or database.
* Modify UI elements using **TailwindCSS** for responsive layouts.
* Integrate features like **user authentication**, **uploading**, or **commenting**.

---

## 🤝 Contributing

1. Follow existing component patterns.
2. Add tests or UI previews when contributing.
3. Open issues or pull requests with clear steps to reproduce or improve.

---

## 📜 License

MIT — free to use, modify, and distribute.