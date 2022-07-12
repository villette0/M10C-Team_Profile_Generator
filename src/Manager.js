const Employee = require ("./Employee.js");

class Manager extends Employee {
    constructor (name, Id, email, officeNumber) {
        super(name,Id,email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;