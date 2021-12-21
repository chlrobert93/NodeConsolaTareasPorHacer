require('colors');

const{ inquirerMenu, pausa } = require('./helpers/inquirer'); 

const Tareas = require('./models/tareas');
/* const Tarea = require('./models/tarea'); */



const main = async() => {

    console.log('Hola Mundo');

    //mostrarMenu();

    // pausa();
    let opt = '';
    
    do {
       opt = await inquirerMenu();
       console.log({ opt });

       /* const tarea = new Tarea('Comprar comida');
       console.log(tarea);*/
       /* const tareas = new Tareas();
       const tarea = new Tarea('Comprar comida'); */

       /* tareas._listado[tarea.id] = tarea;

       console.log(tareas); */

       await pausa();

    }while( opt !== '0' );

}


main();