const inquirer = require("inquirer");
const fs = require("fs");

//The user will be prompted for their GitHub username and other information pertaining to the project the README is for.
inquirer.prompt([
    {
        type: "input",
        name: "Title",
        message: "What is your Project title?",
    },
    {
        type: "input",
        name: "Description",
        message: "What is your Description?",
    },
    {
        type: "input",
        name: "Table of Contents",
        message: "What is your table of contents?",
    },
    {
        type: "input",
        name: "Installation",
        message: "How to install the dependencies for your product?",
    },
    {
        type: "input",
        name: "Usage",
        message: "What is the usage of this product?", 
    },
    {
        type: "input",
        name: "License",
        message: "What is the license for this product?",
    },    
    {
        type: "input",
        name: "Contributing",
        message: "Who are the contibuting authors for this product?",
    },
    {
        type: "input",
        name: "Tests",
        message: "How to run the tests for this product?",
    },
    {
        type: "input",
        name: "Your GitHub profile",
        message: "What is your GitHub profile?",
    },
    {
        type: "input",
        name: "Your Email",
        message: "What is your email?",
    },

]).then((answers) => {
    
    function getTemplateMd(answers) {
        return ``
    }






    // writeToFile(argv, answers);
});


function writeToFile(fileName, answers) {
    // where do I want the file to be placed?desktop? local directory? do I need to check?
    fs.writeFile(fileName, answers, (err) => {
        if (err) {
            console.error(err);
        }
        console.log("File saved successfully!");
    });   
}

// function init() {

// }




// init();