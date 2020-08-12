const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./generateMarkdown.js");

//const writeFileAsync = util.promisify(fs.wrtieFile);

// array of questions for user
const questions = [
];

function promptUser() {
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
        message: "What is the title of your README?",
        name: "Usage",
    },
    {
        type: "list",
        choices: ["MIT", "GNU", "Apache", "Mozilla", "Boost", "None"],
        message: "What license are you using for your project?",
        name: "License",
    },
    {
        type: "input",
        message: "Who contributed to this project?",
        name: "Contributing",
    },
    {
        type: "input",
        message: "What is the title of your README?",
        name: "Tests",
    },
    {
        type: "input",
        message: "What is the title of your README?",
        name: "title",
    },
])
};   

// function to write README file
function writeToFile(data) {

    
}

// function to initialize program
function init() {
    const response = await promptUser();
    try {
        var readMEData = fs.readFile("./utils/generateMarkdown.js", "utf-8", function(error){
            if (error) {
                return console.log(error);
            }
        });
    console.log("index.js: " + generateMarkdown(response));
    }
    finally {}
}


// function call to initialize program
function init() {
    
}

//Writes to the m.d
function generateMarkdown() {

}