# create-vextro

> Scaffold a modern Chrome extension powered by Vite + React + Tailwind in seconds.

**Vextro** is a starter toolkit designed for building fast, modern Chrome extensions using:

- ⚡ [Vite](https://vitejs.dev/)
- ⚛️ [React + TypeScript](https://reactjs.org/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)
- 🧩 [Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/)
- 🔌 [CRXJS Vite Plugin](https://crxjs.dev/)

---

## Getting Started

You can scaffold a new project using the command:

```bash
npm create vextro@latest
````

Then follow the prompts to set your project name.

```bash
cd my-extension
npm install
npm run dev
```

Finally, open Chrome and load your extension from the `dist/` folder via `chrome://extensions`.

---

## Example Folder Structure

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

## Features

* ⚡ Instant startup with Vite
* 🔥 Hot Module Reload (HMR) for popup and options pages
* 🧩 Multi-entry manifest build handled by `@crxjs/vite-plugin`
* 🛠️ React + TypeScript + Tailwind preconfigured

---

## License

MIT © [Lasantha Lakmal](https://github.com/lasalasa)