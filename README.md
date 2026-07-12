# 🎨 Color Palette Picker

<p align="center">
  A bright, interactive React app for exploring a curated color palette.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" alt="Vite 8" />
  <img src="https://img.shields.io/badge/TypeScript-Ready-3178C6?logo=typescript&logoColor=white" alt="TypeScript ready" />
</p>

## ✨ Overview

Color Palette Picker is a beginner-friendly React project built to practise core React concepts: components, props, state, events, list rendering, and conditional rendering. Select a color and the app instantly updates the live preview.

## 🚀 Features

- Renders the palette from a color array with `.map()`
- Shows a live preview of the selected color and its HEX value
- Highlights the active color with a visual checkmark and accent border
- Displays a friendly empty state before a color is selected
- Resets the app back to its initial state with one click
- Includes responsive, accessible interactions and keyboard focus styles

## 🧩 React Concepts Used

| Concept | Where it is used |
| --- | --- |
| `useState` | Stores the currently selected color |
| Props | Passes color data, click handlers, and selection status to components |
| Events | Updates and resets the selected color |
| `.map()` | Creates all color buttons from one palette array |
| Conditional rendering | Switches between the placeholder and color preview |
| `children` | Lets the optional `Card` component wrap the interface |

## 🗂️ Project Structure

```text
color-palette-picker/
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── ColorButton.jsx
│   │   └── ColorPreview.jsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── package.json
└── README.md
```

---


## 🌐 Live Demo

👉 [Live Demo Link](https://unbrokenlogic.github.io/color-palette-picker/)

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm

### Installation

```bash
git clone https://github.com/UnbrokenLogic/color-palette-picker.git
cd color-palette-picker
npm install
npm run dev
```

Open the local address shown in your terminal, usually `http://localhost:5173`.

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Creates an optimized production build |
| `npm run lint` | Checks the project with ESLint |
| `npm run preview` | Previews the production build locally |

## 🎯 How to Use

1. Choose a color from the palette.
2. See its swatch, name, and HEX value in the preview area.
3. Use **Reset selection** to return to the empty state.

## 📄 License

This project is for learning and practice.

---

Made with React and a little color magic ✨
