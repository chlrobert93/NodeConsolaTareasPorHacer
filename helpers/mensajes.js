require('colors');


const mostrarMenu = () => {
     
    console.clear();
    console.log('========================='.magenta);
    console.log('  Selecione una opción   '.rainbow);
    console.log('=========================\n'.magenta); 

    console.log(` ${ '1.'.cyan } ${ 'Crear tarea'.green }`);
    console.log(` ${ '2.'.cyan } Listar tareas`);
    console.log(` ${ '3.'.cyan } ${ 'Listar tareas completas'.green  }`);
    console.log(` ${ '4.'.cyan } Listar tareas pendientes`);
    console.log(` ${ '5.'.cyan } ${ 'Completar tarea(s)'.green}`);
    console.log(` ${ '6.'.cyan } Borrar tarea`);
    console.log(` ${ '0.'.cyan } ${ 'Salir\n'.green}`);

    // Interfaz para recibir y mostrar información al usuario
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // question para mostrar información al usuario
    readline.question('Seleccione una opción:', (opt) => {
        // console.log( {opt} );
        readline.close();
    })
}

const pausa = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question(`\nPresione ${ 'ENTER'.blue } para continuar\n` ,(opt) =>{
        readline.close();

    });
}

module.exports = {
    mostrarMenu,
    pausa
}