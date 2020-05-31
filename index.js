const inquirer = require("inquirer");
const fs = require("fs");
const os = require("os");
const path = require("path");

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
    // {
    //     type: "input",
    //     name: "Installation",
    //     message: "How to install the dependencies for your product?",
    // },
    // {
    //     type: "input",
    //     name: "Usage",
    //     message: "What is the usage of this product?", 
    // },
    // {
    //     type: "input",
    //     name: "License",
    //     message: "What is the license for this product?",
    // },    
    // {
    //     type: "input",
    //     name: "Contributing",
    //     message: "Who are the contibuting authors for this product?",
    // },
    // {
    //     type: "input",
    //     name: "Tests",
    //     message: "What command will run the tests for this product?",
    // },
    // {
    //     type: "input",
    //     name: "Profile",
    //     message: "What is your GitHub profile?",
    // },
    // {
    //     type: "input",
    //     name: "Email",
    //     message: "What is your email?",
    // },
    {
        type: "input",
        name: "Directory",
        message: "Where would you like to save your README?",
        default: "/Desktop/"
    },
    
]).then((answers) => {
    
    // {
    //     Title: 'afg',
    //     Description: 'arg',
    //     Installation: 'aerh',
    //     Usage: 'jsrt',
    //     License: 'zdh',
    //     Contributing: 'rtj',
    //     Tests: 'dsh',
    //     Profile: 'ery',
    //     Email: 'aerh'
    // }
    const contents = getTemplateMd(answers)
    

    function getTemplateMd(answers) {
        const contributors = answers.Contributing
        // console.log(answers);
        // console.log(answers.Title);

        return `#${answers.Title}

       

        ## Description
        ${answers.Description}

        `
        ;
        
    }
    console.log(answers.Directory);
    console.log(contents);
    
    const homedir = os.homedir()
    console.log(homedir);
    fs.writeFile(`${homedir}${answers.Directory}README.md`, contents, (err) => {
        if (err) {
            console.error(err);
        }
        console.log("File saved successfully!");
    });  
});

// console.log(contents);
 


// function init() {

// }




// init();

// ## Table of Contents

        // - [Installation](##installation) //////
        // - [Usage](##usage) //////
        // - [License](##license) //////
        // - [Installation](##installation) //////
        // - [Installation](##installation) //////


        // ## Installation
        // ${answers.Installation}

        // ## Usage
        // ${answers.Usage}

        // ## License
        // ${answers.License}

        // ## Contributing
        

        // ## Test
        // ``
        // ${answers.Tests}
        
        // ``
        
        // ## Questions:
        // - GitHub profile
        // - Email
