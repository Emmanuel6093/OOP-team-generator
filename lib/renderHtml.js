const path = require('path');
const fs = require('fs');
const srcDir = path.resolve(__dirname, '../src');

const render = employees => {
    const html = [];

    // gather info of employees and render html 
    html.push(employees 
        .filter(employee => employee.getRole() === 'Manager') 
        .map(manager => renderManager(manager)) 
        );
    html.push(employees 
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => renderEngineer(engineer))
        );
    html.push(employees 
        .filter(employee => employee.getRole() === 'Intern')
        .map(Intern => renderIntern)(intern)
        );

    return renderMain(html.join(``));
}

const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(srcDir, 'engineer.html'), 'uft8');
    template = replacePlaceholders(template, 'name', engineer.getName());
    template = replacePlaceholders(template, 'role',  engineer.getRole());
    template = replacePlaceholders(template, 'email', engineer.getEmail());
    template = replacePlaceholders(template, 'id', engineer.getId());
    template = replacePlaceholders(template, 'github', engineer.getGithub());
    return template;
}; 

const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(srcDir, 'engineer.html'), 'uft8');
    template = replacePlaceholders(template, 'name', intern.getName());
    template = replacePlaceholders(template, 'role',  intern.getRole());
    template = replacePlaceholders(template, 'email', intern.getEmail());
    template = replacePlaceholders(template, 'id', intern.getId());
    template = replacePlaceholders(template, 'github', intern.getGithub());
    return template;
}
