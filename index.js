const fs = require('fs');
const inquirer = require('inquirer');
const utils = require("./utils/generateHTML")
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");

const managerArray =  [
    {
        type: 'input',
        name: 'name1',
        message: 'What is the name of the manager?',
    },
    {
        type: 'input',
        name: 'id1',
        message: 'What is the id number of the manager?',
    },
    {
        type: 'input',
        name: 'email1',
        message: 'What is the email of the manager?',
    },
    {
        type: 'input',
        name: 'officeNumber1',
        message: 'What is the office number of the manager?',
    },
];
inquirer.prompt(managerArray).then((answers1) => {
    utils.generateHTML(answers1);
})
// const engineerArray = [
//     {
//         type: 'input',
//         name: 'name2',
//         message: 'What is the name of the engineer?',
//     },
//     {
//         type: 'input',
//         name: 'id2',
//         message: 'What is the id number of the engineer?',
//     },
//     {
//         type: 'input',
//         name: 'email2',
//         message: 'What is the email of the engineer?',
//     },
//     {
//         type: 'input',
//         name: 'gitHub2',
//         message: 'What is the gitHub username of the engineer?',
//     },
// ];
// inquirer.prompt(engineerArray).then((answers2) => {
//     Engineer.generateHTML(answers2);
// })
// const internArray = [
//     {
//         type: 'input',
//         name: 'name3',
//         message: 'What is the name of the intern?',
//     },
//     {
//         type: 'input',
//         name: 'id3',
//         message: 'What is the id number of the intern?',
//     },
//     {
//         type: 'input',
//         name: 'email3',
//         message: 'What is the email of the intern?',
//     },
//     {
//         type: 'input',
//         name: 'school3',
//         message: 'What school did the intern go to?',
//     },
// ];
// inquirer.prompt(internArray).then((answers3) => {
//     Intern.generateHTML(answers3);
// })
