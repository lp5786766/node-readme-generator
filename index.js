const inquirer = require("inquirer");
const fs = require("fs");
const os = require("os");
const path = require("path");

inquirer
  .prompt([
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
      message: "What command will run the tests for this product?",
    },
    {
      type: "input",
      name: "Profile",
      message: "What is the link to your GitHub profile?",
    },
    {
      type: "input",
      name: "Email",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "Picture",
      message: "What is the link to your profice pic?",
    },
  ])
  .then((answers) => {
    function getTemplateMd(answers) {
      // I want to save this part to potentially discuss with my tutor:

      // const contributors = (answers.Contributing).split(" ");
      // console.log(contributors);
      // contributors.forEach(function(author) {
      //     console.log(author);
      //     return author;
      // });

      return `
# ${answers.Title}
![Generic badge](https://img.shields.io/badge/Lisence-${answers.License}-<COLOR>.svg)
## Description
${answers.Description}

## Table of Contents

- [Installation](##installation)
- [Usage](##usage)
- [License](##license)
- [Contributing](##contributing)
- [Test](##test)
- [Questions](##questions)
        
## Installation
For installation run this command:
<pre><code>${answers.Installation}</code></pre>

## Usage
${answers.Usage}

## License
${answers.License}

## Contributing
        
${answers.Contributing}

## Test
For testing run this command: 
<pre><code>${answers.Tests}</code></pre>
        
## Questions
For any question about this product, please feel free to contact me at ${answers.Email}. 

My GitHub profile: ${answers.Profile}

![Profile picture](${answers.Picture})`;
    }
    const contents = getTemplateMd(answers);
    const homedir = os.homedir();

    fs.writeFile(`${homedir}/Desktop/README.md`, contents, (err) => {
      if (err) {
        console.error(err);
      }
      console.log("File saved to Desktop successfully!");
    });
  });
