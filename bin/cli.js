#!/usr/bin/env node

import { execSync } from "child_process";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import inquirer from "inquirer";
import chalk from "chalk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const templateDir = path.resolve(__dirname, "../extension-structure");

const run = async () => {
  console.log(chalk.cyanBright("\n🚀 Create Extensify Chrome Extension"));

  // Prompt for project name
  const { projectName } = await inquirer.prompt([
    {
      name: "projectName",
      message: "Enter your extension project name:",
      default: "my-extension",
    },
  ]);

  const projectDir = path.resolve(process.cwd(), projectName);

  if (fs.existsSync(projectDir)) {
    console.log(chalk.red(`❌ Folder "${projectName}" already exists.`));
    process.exit(1);
  }

  // 1. Scaffold base Vite + React + TS project
  console.log(chalk.yellow("⚙️  Creating base Vite + React + TS project..."));
  execSync(`npm create vite@latest ${projectName} -- --template react-ts`, {
    stdio: "inherit",
  });

  // 2. Install dependencies
  process.chdir(projectDir);
  console.log(chalk.yellow("📦 Installing dependencies..."));
  execSync("npm install", { stdio: "inherit" });

  // 2.5 Remove default Vite template files
  console.log(chalk.yellow("🧹 Removing default Vite template files..."));

  const filesToRemove = [
    "src/App.tsx",
    "src/main.tsx",
    "src/index.css",
    "src/App.css",
    "src/assets",
    'index.html'
  ];

  for (const file of filesToRemove) {
    const fullPath = path.join(projectDir, file);
    if (await fs.pathExists(fullPath)) {
      await fs.remove(fullPath);
    }
  }

  // 2.6 Clean up default public folder
  console.log(chalk.yellow('🧹 Cleaning default public folder...'));

  const publicPath = path.join(projectDir, 'public');
  if (await fs.pathExists(publicPath)) {
    await fs.emptyDir(publicPath);
  }

  // 3. Copy src and public folders
  console.log(chalk.yellow("📁 Copying extension structure into project..."));

  await fs.copy(path.join(templateDir, "src"), path.join(projectDir, "src"));
  await fs.copy(
    path.join(templateDir, "public"),
    path.join(projectDir, "public")
  );

  // 4. Copy root files (vite.config.ts, tsconfig.json, package.json)
  console.log(chalk.yellow("📝 Overriding config files..."));

  const rootFiles = ["vite.config.ts"];
  for (const file of rootFiles) {
    const from = path.join(templateDir, file);
    const to = path.join(projectDir, file);
    if (await fs.pathExists(from)) {
      await fs.copy(from, to, { overwrite: true });
    }
  }

  // 5. Replace project name in manifest.ts and package.json
  await injectProjectName(projectDir, projectName);

  // 6. Install additional dev dependencies
  console.log(chalk.yellow("📦 Installing dev dependencies..."));
  execSync(
    "npm install --save-dev @types/chrome @types/node @crxjs/vite-plugin tailwindcss @tailwindcss/vite",
    { stdio: "inherit" }
  );

  // ✅ Done
  console.log(chalk.green("\n✅ Vextro project created successfully!"));
  console.log(chalk.cyan(`\n👉 cd ${projectName} && npm run dev\n`));
};

const injectProjectName = async (targetDir, projectName) => {
  const manifestPath = path.join(targetDir, "src", "manifest.ts");
  const pkgPath = path.join(targetDir, "package.json");

  if (await fs.pathExists(manifestPath)) {
    let manifest = await fs.readFile(manifestPath, "utf-8");
    manifest = manifest.replace(/__EXT_NAME__/g, projectName);
    await fs.writeFile(manifestPath, manifest, "utf-8");
  }

  if (await fs.pathExists(pkgPath)) {
    let pkg = await fs.readFile(pkgPath, "utf-8");
    pkg = pkg.replace(/"__EXT_NAME__"/g, `"${projectName}"`);
    await fs.writeFile(pkgPath, pkg, "utf-8");
  }
};

run();
