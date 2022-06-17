const fs = require('fs');

const generateHTML = ({
    name1,
    id1,
    email1,
    officeNumber1,
    name2,
    id2,
    email2,
    gitHub2,
    name3,
    id3,
    email3,
    school3,

}) => {
    const HTML = (
        `
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
            <div class='manager'>
                <h2>
                    ${name1}
                </h2>
                <h2>
                    Manager
                </h2>
                <p>
                    ID: ${id1}
                </p>
                <p>
                    Email: ${email1}
                </p>
                <p>
                    Office Number: ${officeNumber1}
                </p>
            </div>
            <div class='engineer'>
                <h2>
                    ${name2}
                </h2>
                <h2>
                    Engineer
                </h2>
                <p>
                    ID: ${id2}
                </p>
                <p>
                    Email: ${email2}
                </p>
                <p>
                    Github: ${gitHub2}
                </p>
            </div>
            <div class='intern'>
                <h2>
                    ${name3}
                </h2>
                <h2>
                    Intern
                </h2>
                <p>
                    ID: ${id3}
                </p>
                <p>
                    Email: ${email3}
                </p>
                <p>
                    School: ${school3}
                </p>
            </div>
        </body>
        
        </html>
        `
    );
    fs.writeFileSync('./output/output.html', HTML);
    console.log('HTML GENERATED!');
    process.exit();
}
module.exports = {
    generateHTML
};

