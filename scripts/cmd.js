

// get elements 
let commands = document.querySelector('.commands');
let command = document.querySelector('.command');
let commandInpt = document.querySelector('.commandInpt');
let commandOutput = document.querySelector('.commandOutput');


let currentDate = new Date();

console.log(currentDate.getFullYear)
let commandObj = {
    soLogic: 'so Logic',
    fullName: 'soundous cherifi',
    age: (currentDate.getFullYear() - 2006) + ' years',
    services: ['FrontEnd Dev'].join(' - '),
    skills: ['html5', 'css3', 'java script', 'bootstrap' , 'git' , 'github' ,'Python', 'mySql', 'pandas', 'numpy', 'matplotlib'].join('  |  '),
    about: 'I am committed to mastering full-stack web development by building a rigorous foundation in both front-end architecture and back-end systems.',
    experience : 'not available',
    speciality : 'computer science enginner data science',
    email: 'sondos23cv@gmail.com',
    phonenumber: 'not available',
    contact: ' github : <https://github.com/Sondosprg> | instagram : <https://www.instagram.com/so.logic03/> linkedin : <https://www.linkedin.com/in/sondos-cher-688255292/> ',
    projects: ['project 1' , "project 2"],
    language: ['AR', 'EN'],
    help: 'Available commands: soLogic - fullName - age -  services -  skills - about - experience - speciality - email - phonenumber - projects -  contact - language - help - clear - mode - date ',
    clear: '',
    mode: ['dark', 'space', 'snow'],
    date: currentDate.toLocaleString(),

};


commandInpt.addEventListener('keyup', (e) => {
    if (e.key == 'Enter') {
        Outputs(commandInpt.value.trim());

    }
});


function Outputs(commandInptValue) {

    if (commandInptValue == '') {
        commandStart();
        return;
    }

    let output = document.createElement('div');
    let foundCmnd = false;

    for (let cmnd in commandObj) {
        if (cmnd == commandInptValue) {
          console.log(commandObj[cmnd])
            output.appendChild(document.createTextNode(commandObj[cmnd]));
            commandOutput.appendChild(output);
            foundCmnd = true;
        }


        if(commandInptValue ==='clear'){
            command.innerHTML ='';
            commandOutput.innerHTML ='';
          }
        
    }
    if (!foundCmnd) {

        output.appendChild(document.createTextNode(` "${commandInptValue}" is not recognized as an internal command!!!`));
        output.className = 'commandError';
        commandOutput.appendChild(output);
    }
    commandStart();
};


function commandStart() {
    let div = document.createElement('div');
    div.className = 'command';
    let span = document.createElement('span');
    span.className = "username";
    span.appendChild(document.createTextNode("C:\\Users\\SoLogic>"));
    let input = document.createElement('input');
    input.autofocus = true;
    input.className = 'commandInpt';
    let br = document.createElement('br');

    commandOutput.appendChild(div);
    commandOutput.appendChild(span);
    commandOutput.appendChild(commandInpt);
    commandInpt.value = '';
    commandInpt.focus();

};

