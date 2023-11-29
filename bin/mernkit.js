#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const projectName = process.argv[2] || 'my-mern-project';
const projectPath = path.join(process.cwd(), projectName);

// Function to copy a directory
async function copyDir(src, dest) {
  await fs.promises.mkdir(dest, { recursive: true });
  let entries = await fs.promises.readdir(src, { withFileTypes: true });

  for (let entry of entries) {
    let srcPath = path.join(src, entry.name);
    let destPath = path.join(dest, entry.name);

    entry.isDirectory() ?
      await copyDir(srcPath, destPath) :
      await fs.promises.copyFile(srcPath, destPath);
  }
}

async function copyTemplates() {
  try {
    const scriptDir = path.resolve(__dirname);

    // Copy Frontend and Backend templates in parallel
    await Promise.all([
      copyDir(path.join(scriptDir, '../templates/frontend'), path.join(projectPath, 'frontend')),
      copyDir(path.join(scriptDir, '../templates/backend'), path.join(projectPath, 'backend'))
    ]);

    console.log('mernkit setup completed successfully!');
    console.log(`Now run the following command to setup your project`);
    console.log(`\tOpen two panels of CID`);
    console.log(` \tIn first command prompt`);
    console.log(`\t\t-cd backend`);
    console.log(`\t\t-npm install`);
    console.log(`\tIn second command prompt`);
    console.log(`\t\t-cd frontend`);
    console.log(`\t\t-npm install`);
    console.log(`Created a new MERN project at ${projectPath}`);
  } catch (error) {
    console.error('Error copying templates:', error);
  }
}

// Invoke the asynchronous function
copyTemplates();
