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
  This application is covered under the ${data.License} license.

  ##Contributing:<a name="contributing"></a>
  ${data.Contributing}

  ## Tests:<a name="tests"></a>
  ${data.Tests}

  ## Questions:<a name="questions"></a>
  <ahttps.//github.com/${data.QuestionOne}></a>
  Please contact: ${data.QuestionTwo}
`;
}

module.exports = generateMarkdown;
