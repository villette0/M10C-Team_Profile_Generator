//The node modules of inquirer for prompts and file system for writing the html and copying the css are used in this application.
const inquirer = require("inquirer");
const fs = require("fs");
// Information from the following three classes are used in this application
const Engineer = require("./src/Engineer.js");
const Manager = require("./src/Manager.js");
const Intern = require("./src/Intern.js");

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
                addManagertoArray();
            }
            else if (answers.employee_selection == "Engineer") {
                addEngineertoArray();
            }
            else if (answers.employee_selection == "Intern") {
                addInterntoArray();
            }
            else {
                compileTeam();
                console.log("Thank you for using the application. If you added a team member the index.html file can be found in the dist folder.")
                return;
            }
        })
}

const addManagertoArray = () => {
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
            console.log("A manager has been added with the following information:");
            console.log("Name: " + manager.name+ ", ID: " + manager.Id + ", Email: " + manager.email + ", Office Number: " + manager.office_number);
            startMenu();
        }
        )
}

const addEngineertoArray = () => {
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
            console.log("An engineer has been added with the following information:");
            console.log("Name: " + engineer.name+ ", ID: " + engineer.Id + ", Email: " + engineer.email + ", Github: " + engineer.github);
            startMenu();
        }
        )
}

const addInterntoArray = () => {
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
            employeeArray.push(intern);
            console.log("An intern has been added with the following information:");
            console.log("Name: " + intern.name+ ", ID: " + intern.Id + ", Email: " + intern.email + ", School: " + intern.school);
            startMenu();
        }
        )
}

const compileTeam = () => {
    let team = [];
    for (let i = 0; i < employeeArray.length; i++) {
        if (employeeArray[i].getRole() == "Manager") {
            const managerCard = addManagerCard(employeeArray[i]);
            team.push(managerCard);
        } else if (employeeArray[i].getRole() == "Engineer") {
            const engineerCard = addEngineerCard(employeeArray[i]);
            team.push(engineerCard);
        } else {
            const internCard = addInternCard(employeeArray[i]);
            team.push(internCard);
        }
    }
    fs.writeFileSync("./dist/index.html", generateHTML(team.join("")));
    fs.copyFile("./examplepage/style.css","./dist/style.css", null, () => {});
}

const addManagerCard = (manager) => {
    return `
            <div class="col">
                <div class="employee-card">
                <div class="card-banner">
                    <h2>${manager.name}</h2>
                    <h3><i class="fa-solid fa-person-chalkboard"></i> Manager</h3>
                </div>
                <div class="card-info">
                    <h4>ID: ${manager.Id}</h4>
                    <h4>Email: <a href="mailto: ${manager.email}">${manager.email}</a></h4>
                    <h4>Office Number: ${manager.officeNumber}</h4>
                </div>
                </div>
            </div>
    `
}


const addEngineerCard = (engineer) => {
    return `
            <div class="col">
                <div class="employee-card">
                <div class="card-banner">
                    <h2>${engineer.name}</h2>
                    <h3><i class="fa-solid fa-computer"></i> Engineer</h3>
                </div>
                <div class="card-info">
                    <h4>ID: ${engineer.Id}</h4>
                    <h4>Email: <a href="mailto: ${engineer.email}">${engineer.email}</a></h4>
                    <h4>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></h4>
                </div>
                </div>
            </div>
    `
}

const addInternCard = (intern) => {
    return `
            <div class="col">
                <div class="employee-card">
                <div class="card-banner">
                    <h2>${intern.name}</h2>
                    <h3><i class="fa-solid fa-user-graduate"></i> Intern</h3>
                </div>
                <div class="card-info">
                    <h4>ID: ${intern.Id}</h4>
                    <h4>Email: <a href="mailto: ${intern.email}">${intern.email}</a></h4>
                    <h4>School: ${intern.school}</h4>
                </div>
                </div>
            </div>
    `
}


const generateHTML = (team) => {
    return `
    <!doctype html>
    <html lang="en">
    
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Team Profile</title>
        <!--Icons from font awesome-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
        <!--Bootstrap-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <!-- Custom CSS -->
        <link rel="stylesheet" href="./style.css" />
    </head>
    
    <body>
        <h1>My Team</h1>
    
        <div class="container">
            <div class="row row-cols-3 justify-content-center card-grid">
    
        ${team}

        </div>
        </div>
    
        <!-- Bootstrap -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
            crossorigin="anonymous"></script>
    </body>
    
    </html>
    `
}

startMenu();