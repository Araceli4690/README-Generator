// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
        {
          type: 'input',
          name: 'title',
          message: 'what is the title of your project?'  
        },
        {
           type: 'input',
           name: 'description',
           message: 'provide a description of your project'
        },
        {
            type: 'checkbox',
            name: 'technologies',
            message: 'what technologies were used to build the application?',
            choices: ['HTML', 'CSS', 'Javascript', 'SQL']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'what are the stpes required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'provide instruction and examples for use. To add a screenshot, create an assets/images folder and upload your screenshot to it.'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'list your collaborators, if any, with links to their Github profiles'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'select a license to let other developers know what they can and cannot do with your project.',
            choices: ['GNU', 'GPLv3', 'MIT', 'mozilla public license 2.0', 'apache license 2.0']
        }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            return console.log(err);
    
        console.log('Success!');
});
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput) 
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
