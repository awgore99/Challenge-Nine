// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } if (license === 'none') {
    return license = ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
##Description
${data.description}
##Intallation
${data.installation}
##Usage
${data.usage}
##License
${data.license}
${renderLicenseBadge}
##Contributing
${data.contributing}
##Tests
${data.tests}
##Further Information
Contact me at ${data.email} or ${data.github}
`;
}

module.exports = generateMarkdown;
