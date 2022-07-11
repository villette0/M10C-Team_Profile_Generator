// Include packages needed for this application
//The node modules of inquirer and file system are used in this application.
const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");

let employeeArray = [];


const startMenu = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: 'employee_selection',
                message: "Choose what type of Employee you're adding from the list:",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern",
                    "Quit",
                ]
            }
        ])
        .then((answers) => {
            if (answers.employee_selection == "Manager") {
                addManager();
            }
            else if (answers.employee_selection == "Engineer") {
                addEngineer();
            }
            else if (answers.employee_selection == "Intern") {
                addIntern();
            }
            else {
                console.log("Thank you for using the application.")
                return;
            }
        })
}

const addManager = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the manager's name?",
            },

            {
                type: "input",
                name: "Id",
                message: "What is the manager's ID?",
            },

            {
                type: "input",
                name: "email",
                message: "What is the manager's email?",
            },

            {
                type: "input",
                name: "office_number",
                message: "What is the manager's office number?",
            },
        ])
        .then((answers) => {
            const manager = new Manager(answers.name, answers.Id, answers.email, answers.office_number);
            console.log(manager);
            employeeArray.push(manager);
            console.log("Manager Added");
            startMenu();
        }
        )
}

const addEngineer = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the engineer's name?",
            },

            {
                type: "input",
                name: "Id",
                message: "What is the engineer's ID?",
            },

            {
                type: "input",
                name: "email",
                message: "What is the engineer's email?",
            },

            {
                type: "input",
                name: "github",
                message: "What is the engineer's github username?",
            },
        ])
        .then((answers) => {
            const engineer = new Engineer(answers.name, answers.Id, answers.email, answers.github);
            console.log(engineer);
            employeeArray.push(engineer);
            console.log("Engineer Added");
            startMenu();
        }
        )
}

const addIntern = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the intern's name?",
            },

            {
                type: "input",
                name: "Id",
                message: "What is the intern's ID?",
            },

            {
                type: "input",
                name: "email",
                message: "What is the intern's email?",
            },

            {
                type: "input",
                name: "school",
                message: "What is the intern's school?",
            },
        ])
        .then((answers) => {
            const intern = new Intern(answers.name, answers.Id, answers.email, answers.school);
            console.log(intern);
            employeeArray.push(intern);
            console.log("Intern Added");
            startMenu();
            console.log(employeeArray);
        }
        )
}


startMenu();