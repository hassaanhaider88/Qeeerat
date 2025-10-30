...existing code...
# Qeeerat — Qeeerat App

Qeeerat is a lightweight app for discovering short Quranic verse clips (30s–1m) with translations suitable for use as status videos. The FrontEnd is a React + Vite app and the BackEnd contains a minimal Express helper.

## Key ideas
- Browse short verse clips with translations and metadata.
- Quick playback with custom controls (`CustomVideoTag`) and progress preview.
- Save / like / share short clips for status use (30s–1m).
- Simple modular components so you can extend sources, translations, or add user accounts.

## Features
- Video preview and lightweight player with hover-seek: see [`CustomVideoTag`](FrontEnd/src/Components/CustomVideoTag.jsx).
- Feed view of posts using dummy data: see [`HomeFeed`](FrontEnd/src/Pages/HomeFeed.jsx) and [`PostData`](FrontEnd/src/DummyData/PostData.js).
- Per-post card UI and interactions: see [`HomeFeedPost`](FrontEnd/src/Components/HomeFeedPost.jsx) and [`SinlgeVidoeCard`](FrontEnd/src/Components/SinlgeVidoeCard.jsx).
- Backend helper for scraping/redirecting (example): [`BackEnd/server.js`](BackEnd/server.js).

## Quick start

1. Clone repository (already in this workspace).
2. Frontend
   - Open terminal in `FrontEnd/`
   - Install and start:
     ```sh
     cd FrontEnd
     npm install
     npm run dev
     ```
   - App serves via Vite; entry is .
3. Backend (optional)
   - Open terminal in 
   - Install and start:
     ```sh
     cd BackEnd
     npm install
     npm run dev
     ```
   - Backend example server: 

## Project structure (important files)
- Frontend
  -  — custom player, progress and hover-preview.
  -  — main feed using .
  -  — sample posts (videoUrl, translation metadata).
  -  — post header + options.
  -  — video card with like/save/share actions.
  -  & 
- Backend
  - 

## How clips are represented
Each post uses the shape in :
- videoUrl — mp4 HLS or direct URL
- SurahName, AyatFrom, AyatTo — verse reference
- videoLikes — metric
- videoCreated — user object (see )

## Extending / Notes
- To add translations, attach a translation field to  entries and render it in the UI.
- Keep clip length between 30s and 60s — if you host generation, trim server-side or produce social-format MP4 segments.
- Replace dummy data with an API endpoint to fetch curated verse clips and translations.
- UI uses Tailwind; see FrontEnd/index.css for global styles.

## Contributing
- Follow the existing component patterns.
- Add unit tests or UI snapshots as needed.
- Open issues / PRs with reproduction steps.

## License
MIT — adapt as needed.
