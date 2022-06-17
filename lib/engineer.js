const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }
    getGitHub() {
        return this.gitHub;
    }
    getRole() {
        return "Engineer";
    }
}
module.exports = {Engineer};


// const engineer = new Engineer(engineerArray);
// engineer.getGitHub();
// engineer.getRole();