const inquirer = require('inquirer');
require('colors');


const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: ['1.Crear lista', 'opt2', 'opt3']
    }
];


const inquireMenu = async() => {
    
    //console.clear();
    console.log('========================='.magenta);
    console.log('  Selecione una opción   '.rainbow);
    console.log('=========================\n'.magenta); 

    const opt = await  inquirer.prompt(preguntas);

    return opt;

}



module.exports = {
    inquireMenu
}