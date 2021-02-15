// requiring in the NPMs and methods I'll be using
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// Here are the questons given to you by the INquirer prompts
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
    type: "list",
    message: "What license is the app under?",
    choices: ["MIT", "ISC", "IBM", "Mozilla", "Apache", "PDDL"],
    name: "license",
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
    {
      type: 'input',
      name: 'github',
      message: "What is your GitHub username?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is your email address?",
    },
  ]);
};

//This is the text generated for the read me file with answer input plugged into the correct areas
const generateReadMe = (answers) =>
`# ${answers.title}
- [DESCRIPTION](#description)
- [INSTALLATION](#installation)
- [USAGE](#usage)
- [CONTRIBUTIONS](#contributions)
- [TESTS](#tests)
- [QUESTIONS](#questions)

- [![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-blueviolet.svg)]
(https://opensource.org/licenses/${answers.license})
___________________________

## DESCRIPTION
${answers.description}

___________________________

### INSTALLATION
${answers.installation}

___________________________

### USAGE
${answers.usage}

___________________________

### CONTRIBUTIONS
${answers.contributors}

___________________________

### TESTS
${answers.tests}

___________________________

### QUESTIONS
You can reach the developer for additional info or questions by contacting them via GitHub (${answers.github}) or email (${answers.email})

___________________________
### LICENSES 
This app is covered under the license ${answers.license}.
`;


// This is a function that is called at start of running app
function init() {
questions()
.then((answers) => writeFileAsync("README.md", generateReadMe(answers)))
.then(()=> console.log("Created your README file"))
.catch((err) => console.error(err));
};

// Function call to initialize app
init();
