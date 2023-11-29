#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');

const projectName = process.argv[2] || 'my-mern-project';
const projectPath = path.join(process.cwd(), projectName);

// async function copyTemplates() {
//   try {
//     // Use __dirname for the script's directory
//     const scriptDir = path.resolve(__dirname);

//     // Copy Front-end template asynchronously
//     await fs.copy(path.join(scriptDir, '../templates/frontend'), path.join(projectPath, 'frontend'));

//     // Copy Backend template asynchronously
//     await fs.copy(path.join(scriptDir, '../templates/backend'), path.join(projectPath, 'backend'));

//     console.log(`Created a new mernkit project at ${projectPath}`);
//   } catch (error) {
//     console.error('Error copying templates:', error);
//   }
// }


// async function copyTemplates() {
//     try {
//       const scriptDir = path.resolve(__dirname);
  
//       // Copy Frontend and Backend templates in parallel
//       await Promise.all([
//         fs.copy(path.join(scriptDir, '../templates/frontend'), path.join(projectPath, 'frontend')),
//         fs.copy(path.join(scriptDir, '../templates/backend'), path.join(projectPath, 'backend'))
//       ]);
  
//       console.log(`Created a new mernkit project at ${projectPath}`);
//     } catch (error) {
//       console.error('Error copying templates:', error);
//     }
//   }


async function copyTemplates() {
  try {
    const scriptDir = path.resolve(__dirname);

    // Copy Frontend and Backend templates in parallel
    await Promise.all([
      fs.copy(path.join(scriptDir, '../templates/frontend'), path.join(projectPath, 'frontend')),
      fs.copy(path.join(scriptDir, '../templates/backend'), path.join(projectPath, 'backend'))
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
