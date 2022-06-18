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
        <div class='manager'>
        <h2>
            ${managerArray.getName()}
        </h2>
        <h2>
            ${managerArray.getRole()}
        </h2>
        <p>
            ID: ${managerArray.getId()}
        </p>
        <p>
            Email: ${managerArray.getEmail()}
        </p>
        <p>
            Office Number: ${managerArray.getOfficeNumber()}
        </p>
    </div>
        `}
    const engineer = engineerArray => {
        return `
            <div class='engineer'>
            <h2>
                ${engineerArray.getName()}
            </h2>
            <h2>
                ${engineerArray.getRole()}
            </h2>
            <p>
                ID: ${engineerArray.getId()}
            </p>
            <p>
                Email: ${engineerArray.getEmail()}
            </p>
            <p>
                Office Number: ${engineerArray.getGitHub()}
            </p>
        </div>
            `}
    const intern = internArray => {
        return `
                <div class='manager'>
                <h2>
                    ${internArray.getName()}
                </h2>
                <h2>
                    ${internArray.getRole()}
                </h2>
                <p>
                    ID: ${internArray.getId()}
                </p>
                <p>
                    Email: ${internArray.getEmail()}
                </p>
                <p>
                    Office Number: ${internArray.getSchool()}
                </p>
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
        </head>
        <h1>
            My Team
        </h1>
        <body>
           ${employeesVar(data)}
        </body>
        
        </html>
        `
        
    }
    writeToFile(templateHTML(data));
}


module.exports = generateHTML;

