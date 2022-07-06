import inquirer from 'inquirer';
console.log('Testing')

import fs from 'fs/promises'
import { generateLicenseBadge } from './utility/markdown.js';

inquirer
  .prompt([
    {
        type: "input",
        message: "What is the name of your project?",
        name: 'name',
    }, 
    {
      type: "input",
      message: "What is your GitHub username",
      name: 'GitHub',
  }, 
  {
      type: "input",
      message: "What is the title of your repository?",
      name: 'title',
  },  
  {
      type: "input",
      message: "Please provide a table of contents:",
      name: 'tableofcontents',
  }, 
  {
      type: "input",
      message: "What is the purpose of this project?",
      name: 'purpose',
  }, 
  {
      type: "input",
      message: "Deployment link/URL:",
      name: 'livelink'
  }, 
  {
      type: "editor",
      message: "Instalation instructions:",
      name: 'instalation'
  }, 
  {
      type: "input",
      message: "Contributors: ",
      name: 'contributors',
  }, 
  {
      type: "input",
      message: "Tests:",
      name: 'tests',
  }, 
  {
      type: "editor",
      message: "Questions: (this section will include GitHub information)",
      name: 'questions',
  }, 
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
* [ Tests ](#tests)
* [ License ](#license)
* [ Contributing ](#contribution)
* [ Questions ](#questions)
  
    
## Description
    ${response.purpose}
  
   
## Installation
    ${response.instalation}
  
  
   
## Contributing
    ${response.contributors}
  
  
## Tests
    ${response.tests}
  
   
## License
    ${response.licenses} 
*${generateLicenseBadge(`${response.licenses}`)}
   
## Questions
    ${response.questions}
* [Find me on GitHub](https://github.com/${response.Github}/)
* Deployed website at: ${response.livelink}
    
    `; 
    createFile(generateDoc);
});


async function createFile(generateDoc){
    try {
        const content = generateDoc;
        console.log('content');
        await fs.writeFile("README.md", generateDoc);
    } catch (err) {
        console.log('err', err);
    }
};
