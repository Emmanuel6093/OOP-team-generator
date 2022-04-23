// export engineer class
const Employee = require('./Employee');

// class info for engineer 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, github);
        this.github = github;
        this.title = 'Engineer';
    };
    
    getGithub() {
        return this.github; 
    }
}

module.exports = Engineer; 
