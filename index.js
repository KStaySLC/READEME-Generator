import inquirer from 'inquirer';
console.log('Testing')
// import fs from 'fs';
// const fs = require('fs/promises');
import fs from 'fs/promises'
import { generateLicenseBadge } from './utility/markdown.js';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: "input",
        message: "What is the name of your project?",
        name: 'name',
    }, 
//     {
//       type: "input",
//       message: "What is your GitHub username",
//       name: 'GitHub',
//   }, 
//   {
//       type: "input",
//       message: "What is the title of your repository?",
//       name: 'title',
//   },  
//   {
//       type: "input",
//       message: "Please provide a table of contents:",
//       name: 'tableofcontents',
//   }, 
//   {
//       type: "input",
//       message: "What is the purpose of this project?",
//       name: 'purpose',
//   }, 
//   {
//       type: "input",
//       message: "Deployment link/URL:",
//       name: 'livelink'
//   }, 
//   {
//       type: "editor",
//       message: "Instalation instructions:",
//       name: 'instalation'
//   }, 
//   {
//       type: "input",
//       message: "Contributors: ",
//       name: 'contributors',
//   }, 
//   {
//       type: "input",
//       message: "Tests:",
//       name: 'tests',
//   }, 
//   {
//       type: "editor",
//       message: "Questions: (this section will include GitHub information)",
//       name: 'questions',
//   }, 
  {
      type: 'list',
      message: "This project is licensed with:",
      choices: ['Apache 2.0', 'GNU (GPL)', 'MIT', 'Mozilla Public License 2.0', 'No license'],
      name: 'licenses'
  },

  ])
  .then(response => {
    console.log('response. license', response.licenses)

    console.log(generateLicenseBadge(`${response.licenses}`))
    const generateDoc = `
# ${response.name} 

## ${response.tableofcontents}
* [ Description ](#about)
* [ Installation ](#installation)
* [ Usage ](#usage)
* [ License ](#license)
* [ Badges ](#badges)
* [ Test Instructions ](#test)
* [ Contributing ](#contribution)
* [ Questions ](#questions)
  
    
## Description
    ${response.purpose}
  
    <a name="installation"></a>
## Installation
    ${response.instalation}
  
  
    <a name="contribution"></a>
## Contributing
    ${response.contributors}
  
    <a name="test"></a>
## Tests
    ${response.tests}
  
    <a name="license"></a>
## License
    ${response.licenses} 
*${generateLicenseBadge(`${response.licenses}`)}
    <a name="questions"></a>
## Questions
    ${response.questions}
* [Find me on GitHub](https://github.com/${response.Github}/)
* Deployed website at: ${response.livelink}
    
    `; 
    createFile(generateDoc);
});
  //   // Use user feedback for... whatever!!


async function createFile(generateDoc){
    try {
        const content = generateDoc;
        console.log('content');
        await fs.writeFile("README.md", generateDoc);
    } catch (err) {
        console.log('err', err);
    }
}

    // fs.writeFile("README.md", answers, (err) => {
    //   if(err) {console.log(err)}    
    //   console.log('readme created')
    // })
  
  // .catch((error) => {
  //   if (error.isTtyError){
  //     console.log('ERROR: ', error)
  //   } else {
  //     console.log('Something Else went Wrong');
  //   }
    
  // }
// From Kasey
  //Creates Badge with link for license
// const renderLicenseBadge = (license) => {
//     const badges = {
//       mit: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
//       isc: `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`,
//       gnuplv3: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
//     }
//     return badges[license]
//   }