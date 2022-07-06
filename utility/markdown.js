// const fs = require('fs');

let selectedLicense;
// let selectedLicenseInfo;
// let selectedLicenseLink;

export function generateLicenseBadge(license) {
    if (license === "Apache 2.0") {
        selectedLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if (license === "No License") {
        selectedLicense = ''
    } else if (license === "MIT") {
        selectedLicense = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg'
    }
    return selectedLicense;
}

//['Apache 2.0', 'GNU (GPL)', 'MIT', 'Mozilla Public License 2.0', 'No license']

// function generateMarkdown(data) {
//     const licenseBadge = generateLicenseBadge(`${data.license}`);

//     return `
//     # ${data.title} 

//     ## Table of Contents
//     * [ Description ](#about)
//     * [ Installation ](#installation)
//     * [ Usage ](#usage)
//     * [ License ](#license)
//     * [ Badges ](#badges)
//     * [ Test Instructions ](#test)
//     * [ Contributing ](#contribution)
//     * [ Questions ](#questions)
  
//     <a name="about"></a>
//     ## Description
//     ${data.about}
  
//     <a name="installation"></a>
//     ## Installation
//     ${data.instructions}
  
//     <a name="usage"></a>
//     ## Usage
//     ${data.usage}
  
//     <a name="contribution"></a>
//     ## Contributing
//     ${data.contribution}
  
//     <a name="test"></a>
//     ## Tests
//     ${data.test}
  
//     <a name="license"></a>
//     ## License
//     ${data.license} - ${licenseInfo} (${licenseLink}) ${licenseBadge}
  
//     <a name="questions"></a>
//     ## Questions
//     Feel free to reach out to me with any additional questions
//     * [Find me on GitHub](https://github.com/${data.github}/)
//     * Email me at: ${data.email}
//     `
// }

// module.exports = generateMarkdown