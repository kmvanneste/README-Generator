// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  ## Description
  ${data.Description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Questions](#questions)  
  * [License](#license)  

  ## Installation:<a name="installation"></a>
  ${data.Installation}

  ## Usage:<a name="usage"></a>
  ${data.Usage}

  ## Tests:<a name="tests"></a>
  ${data.Usage}

  ## Questions:<a name="questions"></a>
  ${data.Usage}

  ## License:<a name="license"></a>
  ${data.License}

`;
}

module.exports = generateMarkdown;
