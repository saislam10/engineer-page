const fs = require('fs');

function writeToFile(html) {
    fs.writeFile("./output/output.html", html, function (error) {
        if (error) {
            return console.log(error)
        }
        console.log('Success!')
        process.exit();
    })
}

const generateHTML = (data) => {
    const manager = managerArray => {
        return `
        <div class="card border-dark m-4 mx-6" style="max-width:fit-content">
            <div class="intro text-light mx-4 my-1">
                <h2 class="mx-2">
                    ${managerArray.getName()}
                </h2>
                <h2 class="mx-2">
                    ${managerArray.getRole()}
                </h2>
        </div class>
            <div class="container border-dark">
                <p class="m-1">
                    ID: ${managerArray.getId()}
                </p>
                <p class="m-1">
                    Email: ${managerArray.getEmail()}
                </p>
                <p class="m-1">
                    Office Number: ${managerArray.getOfficeNumber()}
                </p>
            </div>
        </div>
        `}
    const engineer = engineerArray => {
        return `
        <div class="card border-dark m-4 mx-6" style="max-width:fit-content">
            <div class="intro text-light mx-4 my-1">
                <h2 class="mx-2">
                    ${engineerArray.getName()}
                </h2>
                <h2 class="mx-2">
                    ${engineerArray.getRole()}
                </h2>
        </div class>
            <div class="container border-dark">
                <p class="m-1">
                    ID: ${engineerArray.getId()}
                </p>
                <p class="m-1">
                    Email: ${engineerArray.getEmail()}
                </p>
                <p class="m-1">
                    GitHub: ${engineerArray.getGitHub()}
                </p>
            </div>
        </div>
            `}
    const intern = internArray => {
        return `
        <div class="card border-dark m-4 mx-6" style="max-width:fit-content">
            <div class="intro text-light mx-4 my-1">
                <h2 class="mx-2">
                    ${internArray.getName()}
                </h2>
                <h2 class="mx-2">
                    ${internArray.getRole()}
                </h2>
        </div class>
            <div class="container border-dark">
                <p class="m-1">
                    ID: ${internArray.getId()}
                </p>
                <p class="m-1">
                    Email: ${internArray.getEmail()}
                </p>
                <p class="m-1">
                    School: ${internArray.getSchool()}
                </p>
            </div>
        </div>
            `}
    const employeesVar = employees => {
        let employeesStr = ""
        for (i = 0; i < employees.length; i++) {
            if (employees[i].getRole() === "Manager") {
                employeesStr += manager(employees[i])
            }
            if (employees[i].getRole() === "Engineer") {
                employeesStr += engineer(employees[i])
            }
            if (employees[i].getRole() === "Intern") {
                employeesStr += intern(employees[i])
            }
        }
        return employeesStr;
    }

    const templateHTML = data => {
        return `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Members</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
            integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
            <link rel="stylesheet" href="./style.css">
        </head>
        <div class="m-1 page-header">
            My Team
        </div>
        <body>
        <div class="holder justify-content-center">
           ${employeesVar(data)}
        </div>
        </body>
        
        </html>
        `

    }
    writeToFile(templateHTML(data));
}


module.exports = generateHTML;

