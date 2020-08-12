// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  ## Description
  ${data.Description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license) 
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)  

  ## Installation:<a name="installation"></a>
  ${data.Installation}

  ## Usage:<a name="usage"></a>
  ${data.Usage}

  ## License:<a name="license"></a>
  ${data.License}

  ##Contributing:<a name="contributing"></a>

  ## Tests:<a name="tests"></a>
  ${data.Tests}

  ## Questions:<a name="questions"></a>
  <a${data.QuestionOne}
  Please contact: ${data.QuestionTwo}
`;
}

module.exports = generateMarkdown;
