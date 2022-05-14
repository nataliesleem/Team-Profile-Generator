const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');
const generate = require("./src/generateteam");


var employees = [];

function menu () {
    createManager();
};

function createManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name"
        },
        {
            type: "input", 
            name: "managerId",
            message: "What is the manager's id?"
        },
        {
            type: "input", 
            name: "managerEmail",
            message: "What is the mnager's email?"
        },
        {
            type: "input",
            name: "managerOffice",
            message: "What is the manager's office number?"
        }
    ]).then((answers) => {
        console.log(answers);
        const manager = new Manager(
            answers.managerName,
            answers.managerId,
            answers.managerEmail,
            answers.managerOffice
        );
        employees.push(manager);
        console.log(employees);
        addMember();
    })
}

function addMember() {
    inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "What type of employee would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "None"
            ]
        }
    ]).then((answer) => {
        console.log(answer);
        switch (answer.memberChoice) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                generateTeam();
        }
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name"
        },
        {
            type: "input", 
            name: "id",
            message: "What is the engineer's id?"
        },
        {
            type: "input", 
            name: "email",
            message: "What is the engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's github username?"
        }
    ]).then((answers) => {
        console.log(answers);
        const engineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.github
        );
        employees.push(engineer);
        console.log(employees);
        addMember();
    })
}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name"
        },
        {
            type: "input", 
            name: "id",
            message: "What is the intern's id?"
        },
        {
            type: "input", 
            name: "email",
            message: "What is the intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern's school name?"
        }
    ]).then((answers) => {
        console.log(answers);
        const intern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.school
        );
        employees.push(intern);
        console.log(employees);
        addMember();
    })
}

function generateTeam() {
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR);
      }
    fs.writeFileSync(distPath, generate(employees), 'utf-8');
}


menu();