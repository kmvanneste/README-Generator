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
        type: "list",
        choices: ["MIT", "GNU", "Apache", "Mozilla", "Boost", "None"],
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
        fs.writeFile("README_New.md", generateMarkdown(response), function(error) {
            if (error) {
                console.log(error);
                return;
            }
            console.log("Success!")
        })
})