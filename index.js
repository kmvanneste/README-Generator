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
        message: "Who contributed to this project?",
        name: "Contributing",
    },
    {
        type: "input",
        message: "How do you run automated tests for this project?",
        name: "Tests",
    },
    {
        type: "input",
        message: "Do you have any questions regarding this project?",
        name: "Questions",
    },
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

// // function to write README file
// function writeToFile(filename, data) {

//     .then(function(response) {

//     })
//     fs.writeFile(filename, data, function(err) {
//         if (err) {
//             return console.log(err);
//         }
//     })
    
// }

// // function to initialize program
// function init() {
//     writeToFile("README_new.md", genMarkdown(questions));

//     // const response = await promptUser();
//     // try {
//     //     var readMEData = fs.readFile("./utils/generateMarkdown.js", "utf-8", function(error){
//     //         if (error) {
//     //             return console.log(error);
//     //         }
//     //     });
//     // console.log("index.js: " + generateMarkdown(response));
//     // }
//     // finally {}
// }


// // function call to initialize program
// init();
    
    
// //Writes to the m.d
// function generateMarkdown() {

// }