const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor (name, Id, email, school) {
        super(name, Id, email);
        this.school = school;
    }
    getSchool () {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;