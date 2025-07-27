# create-vextro

[![npm version](https://img.shields.io/npm/v/create-vextro?color=blue&style=flat-square)](https://www.npmjs.com/package/create-vextro)
[![npm downloads](https://img.shields.io/npm/dt/create-vextro?style=flat-square)](https://www.npmjs.com/package/create-vextro)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](https://github.com/lasalasa/vextro/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/lasalasa/vextro?style=flat-square)](https://github.com/lasalasa/vextro/stargazers)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](https://github.com/lasalasa/vextro/pulls)

> Scaffold a modern Chrome extension powered by Vite + React + Tailwind in seconds.

**Vextro** is a starter toolkit designed for building fast, modern Chrome extensions using:

- ⚡ [Vite](https://vitejs.dev/)
- ⚛️ [React + TypeScript](https://reactjs.org/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)
- 🧩 [Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/)
- 🔌 [CRXJS Vite Plugin](https://crxjs.dev/)

---

## 🚀 Getting Started

You can scaffold a new extension using one of the following commands:

### With **npm**
```bash
npm create vextro@latest
````

### With **Yarn**

```bash
yarn create vextro
```

### With **pnpm**

```bash
pnpm create vextro
```

### With **Bun**

```bash
bun create vextro
```

Then follow the prompt to choose your project name:

```bash
cd my-extension
npm install
npm run dev
```

Finally, open Chrome and load your extension from the `dist/` folder via `chrome://extensions`.

---

## 📁 Example Folder Structure

```
my-extension/
├── public/                 # Static assets (optional)
├── src/
│   ├── background/         # Background service worker
│   ├── content/            # Content scripts
│   ├── options/            # Options page (React + Tailwind)
│   ├── popup/              # Popup UI (React + Tailwind)
│   ├── manifest.ts         # Typed manifest config
│   ├── styles.css          # Tailwind CSS entrypoint
│   └── utils/              # Utility scripts
├── vite.config.ts          # Vite + CRX plugin config
├── tsconfig.json
└── package.json
```

---

## 🌟 Features

* ⚡ Instant startup with Vite
* 🔥 Hot Module Reload (HMR) for popup and options
* 🧩 Multi-entry support with `@crxjs/vite-plugin`
* 🛠️ Preconfigured React + TypeScript + Tailwind
* 🧱 Opinionated folder structure

---

## 📄 License

MIT © [Lasantha Lakmal](https://github.com/lasalasa)