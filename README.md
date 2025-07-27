# 🔌 Vextro – Vite-Powered Chrome Extension Starter

**Vextro** is a modern boilerplate for building Chrome extensions using:

- 🛠️ [Vite](https://vitejs.dev/)
- ⚛️ [React + TypeScript](https://reactjs.org/)
- 💅 [Tailwind CSS](https://tailwindcss.com/)
- 🧩 [Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/)
- 🧪 [CRXJS Plugin for Vite](https://crxjs.dev/)

---

## 🚀 Quick Start

```bash
npm create vextro@latest my-extension
cd my-extension
npm install
npm run dev
````

Then load `dist/` as an **unpacked extension** in `chrome://extensions`.

---

## 📁 Folder Structure

```
my-extension/
├── public/                 # Static files (if needed)
├── src/
│   ├── background/         # Background script logic
│   ├── content/            # Content scripts
│   ├── options/            # Options UI
│   ├── popup/              # Popup UI (React + Tailwind)
│   ├── styles.css          # Tailwind CSS entry
│   ├── manifest.ts         # Manifest V3 (TS export)
│   └── utils/              # Shared logic/utilities
├── vite.config.ts          # Vite + CRX plugin config
└── tsconfig.json
```

---

## 📦 Features

* 🌐 **Vite dev server** with HMR for `popup` and `options`
* 🧠 **React + TypeScript** scaffolding
* 🎨 **TailwindCSS** preconfigured
* ⚡ **CRXJS plugin** handles manifest, HMR, and multi-page output

---

## 🛠️ Development Commands

| Command         | Description                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Launch Vite in watch mode          |
| `npm run build` | Create production build in `dist/` |
| `npm run lint`  | Run ESLint (if configured)         |

---

## 📖 Usage Notes

* `popup/index.tsx` mounts to `#root` in `popup.html`
* CRX plugin watches `manifest.ts` and builds all declared entries
* You can add additional HTML entry points if needed via `vite.config.ts`

---

## 📄 License

MIT © \[Lasantha]