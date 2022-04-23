// export
const Employee = require('./Employee'); 

// manager class info
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email); 
        this.officeNumber = officeNumber;
        this.title = 'Manager';
    }
}

module.exports = Manager;