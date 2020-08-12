const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user  
inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "Title",
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "Description",
    },
    {
        type: "input",
        message: "What are the installation instructions for your project?",
        name: "Installation",
    },
    {
        type: "input",
        message: "What are the installation instructions for your project?",
        name: "Installation",
    },
    {
        type: "list",
        choices: ["MIT", "Apache", "IBM", "Mozilla", "None"],
        message: "What license are you using for your project?",
        name: "License",
    },
    {
        type: "input",
        message: "What are the contribution guidelines for this project?",
        name: "Contributing",
    },
    {
        type: "input",
        message: "How do you run automated tests for this project?",
        name: "Tests",
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "QuestionOne",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "QuestionTwo"
    }
]) .then(function(response) {
    console.log(response);
        if (response.License === "MIT") {
            response.badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" 
        }
        if (response.License === "Apache") {
            response.badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        }
        if (response.License === "IBM") {
            response.badge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
        }
        if (response.License === "Mozilla") {
            response.badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
        }
        if (response.License === "None") {
            response.badge = {name: "No license"}
        }
        fs.writeFile("README_New.md", generateMarkdown(response), function(error) {
            if (error) {
                console.log(error);
                return;
            }
            console.log("Success!")
        })
})