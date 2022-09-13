let selectedLicense;

export function generateLicenseBadge(license) {
    if (license === "Apache 2.0") {
        selectedLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if (license === "No License") {
        selectedLicense = 'N/A.'
    } else if (license === "MIT") {
        selectedLicense = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg'
    }
    return selectedLicense;
};