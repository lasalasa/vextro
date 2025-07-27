#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import inquirer from 'inquirer';
import chalk from 'chalk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const extensionTemplateDir = path.resolve(__dirname, '../extension-structure');

const run = async () => {
  console.log(chalk.cyanBright('\n🚀 Create Extensify Chrome Extension'));

  // Ask for project name
  const { projectName } = await inquirer.prompt([
    {
      name: 'projectName',
      message: 'Enter your extension project name:',
      default: 'my-extension'
    }
  ]);

  const projectDir = path.resolve(process.cwd(), projectName);

  if (fs.existsSync(projectDir)) {
    console.log(chalk.red(`❌ Folder "${projectName}" already exists.`));
    process.exit(1);
  }

  // Step 1: Scaffold Vite project (React + TS)
  console.log(chalk.yellow('⚙️  Creating base project with Vite (React + TypeScript)...'));
  execSync(`npm create vite@latest ${projectName} -- --template react-ts`, { stdio: 'inherit' });

  // Step 2: Install dependencies
  process.chdir(projectDir);
  console.log(chalk.yellow('📦 Installing dependencies...'));
  execSync('npm install', { stdio: 'inherit' });

  // Step 3: Copy extension folders into src/
  const srcDir = path.join(projectDir, 'src');
  console.log(chalk.yellow('🧩 Adding Chrome extension structure...'));
  await fs.copy(extensionTemplateDir, srcDir);

  // Step 4: Override vite.config.ts
  console.log(chalk.yellow('⚙️ Overriding vite.config.ts...'));
  await fs.copyFile(
    path.join(extensionTemplateDir, 'vite.config.ts'),
    path.join(projectDir, 'vite.config.ts')
  );

  // Step 5: Replace __EXT_NAME__ in manifest.ts and package.json
  await injectProjectName(projectDir, projectName);

  // ✅ Done!
  console.log(chalk.green('\n✅ Extensify project created successfully!'));
  console.log(chalk.cyan(`\n👉 cd ${projectName} && npm run dev\n`));
};

const injectProjectName = async (targetDir, projectName) => {
  // Replace name in manifest.ts
  const manifestPath = path.join(targetDir, 'src', 'manifest.ts');
  let manifestContent = await fs.readFile(manifestPath, 'utf-8');
  manifestContent = manifestContent.replace(/__EXT_NAME__/g, projectName);
  await fs.writeFile(manifestPath, manifestContent, 'utf-8');

  // Replace name in package.json
  const pkgPath = path.join(targetDir, 'package.json');
  let pkgContent = await fs.readFile(pkgPath, 'utf-8');
  pkgContent = pkgContent.replace(/"__EXT_NAME__"/g, `"${projectName}"`);
  await fs.writeFile(pkgPath, pkgContent, 'utf-8');
};

run();
