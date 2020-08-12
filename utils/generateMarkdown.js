// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # ${response.title}

  ## Table of Contents
  - [Description](#description)
  - [License](#license)

  ## Description:

  ## License:

  ## Installation:

  ## Usage:

  ## Tests:

  ## Questions:

`;
}

module.exports = generateMarkdown;
