// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title} ${data.badge}

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

  ## Contributing:<a name="contributing"></a>
  ${data.Contributing}

  ## Tests:<a name="tests"></a>
  ${data.Tests}

  ## Questions:<a name="questions"></a>
  Learn more at: <a>https.//github.com/${data.QuestionOne}</a>
  Email me at: ${data.QuestionTwo}

`;
}

module.exports = generateMarkdown;
