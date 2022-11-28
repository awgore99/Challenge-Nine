// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    // Runs each question through inquirer
        {
            type: "input",
            message: "What is the title of your application?",
            name: "title",
        },
        {
            type: "input",
            message: "What is the description of your application?",
            name: "description",
        },
        {
            type: "input",
            message: "What is the install process for your application?",
            name: "installation",
        },
        {
            type: "input",
            message: "How do you use your application?",
            name: "usage",
        },
        {
            type: "checkbox",
            message: "What License did you use for your application?",
            choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0"],
            name: "license",
        },
        {
            type: "input",
            message: "How can people contribute to the project?",
            name: "contributing",
        },
        {
            type: "input",
            message: "What are the instructions for testing?",
            name: "tests"
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username",
        },
        {
            type: "input",
            message: "What is your email accociated with your GitHub?",
            name: "email"
        },
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, err => {
        if(err){
            reject(err)
            return;
        }
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
