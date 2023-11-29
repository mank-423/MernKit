#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');

const projectName = process.argv[2] || 'my-mern-project';
const projectPath = path.join(process.cwd(), projectName);

// Copy Front-end template
fs.copySync(path.join(__dirname, '../templates/front-end'), path.join(projectPath, 'front-end'));

// Copy Backend template
fs.copySync(path.join(__dirname, '../templates/backend'), path.join(projectPath, 'backend'));

console.log(`Created a new MERN project at ${projectPath}`);
