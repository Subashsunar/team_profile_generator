const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const allEmployees = [];

inquirer.prompt([
    {
    type: "input",
    name: "name",
    message: "What's the manager's name?"
},
{
    type: "input",
    name: "id",
    message: "What's the manager's ID?" 
},
{
    type: "input",
    name: "email",
    message: "What's the manager's Email?" 
},
{
    type: "input",
    name: "officeNumber",
    message: "What's the manager's office number?" 
},
]).then((response) => {
    const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
    allEmployees.push(manager);
    intern();
})

const intern = () => {
    inquirer.prompt([
    {
    type: "input",
    name: "name",
    message: "What's the intern's name?"
},
{
    type: "input",
    name: "id",
    message: "What's the intern's ID?" 
},
{
    type: "input",
    name: "email",
    message: "What's the intern's Email?" 
},
{
    type: "input",
    name: "school",
    message: "What's the name of the school?" 
},
]).then((response) => {
    const intern = new Intern(response.name, response.id, response.email, response.school);
    allEmployees.push(intern);
    engineer();
})
}

const engineer = () => {
    inquirer.prompt([
    {
    type: "input",
    name: "name",
    message: "What's the engineer's name?"
},
{
    type: "input",
    name: "id",
    message: "What's the engineer's ID?" 
},
{
    type: "input",
    name: "email",
    message: "What's the engineer's Email?" 
},
{
    type: "input",
    name: "github",
    message: "What's the engineer's GitHub user name?" 
},
]).then((response) => {
    const engineer = new Engineer(response.name, response.id, response.email, response.github);
    allEmployees.push(engineer);
    console.log(allEmployees);
})
}