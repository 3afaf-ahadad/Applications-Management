# Applications Management

A small React app to manage job applications using redux toolkit.

## 🔗Link: https://tp-react-routage-server-json-yryu.vercel.app/
## Features
- View a list of candidatures
- Add new candidature
- Simple state management with Redux Toolkit

## Tech stack
- React 19
- Vite
- Redux Toolkit
- Axios
- Bootstrap / React-Bootstrap

## Prerequisites
- Node.js (16+ recommended)
- npm (or yarn)

## Install

Install dependencies:

```bash
npm install
```

## Run (development)

Start the dev server:

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

## Build

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

## Project structure (key files)
- `src/` : application source
- `src/App.jsx` : main app component
- `src/components/ListeCandidatures.jsx` : list view
- `src/components/AjouterCandidature.jsx` : add form
- `src/candidaturesSlice.js` : Redux slice for candidatures
- `src/store.js` : Redux store setup

## Notes
- This repo uses Vite for fast development.
- Lint with `npm run lint` (ESLint configured).

## License
This project is provided as-is for educational purposes.
