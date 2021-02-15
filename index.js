// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a Description',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide Step by Step Installation Instructions',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions for proper use',
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'Please include any contributors, 3rd party assets, or tutorials you used',
    },
    {
      type: 'input',
      name: 'tests',
      message: "Any tests created?",
    },
  ]);
};

const generateReadMe = (answers) =>
`#${answers.title}
---------------------------
##${answers.description}
---------------------------
###${answers.installation}
___________________________
`;




// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
questions()
.then((answers) => writeFileAsync("README.md", generateReadMe(answers)))
.then(()=> console.log("Created your README file"))
.catch((err) => console.error(err));
};

// Function call to initialize app
init();
