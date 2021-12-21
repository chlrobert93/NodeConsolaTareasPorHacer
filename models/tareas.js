const Tarea = require('./tarea');
/*
   _listado:
   { 'uuid-1233232-3232-2':  { id: 12, desc:asd, completadoeEn: 999} },
*/

class Tareas {

    _listado = {};

    //Constructor es donde se definen las propiedades
    constructor() {
        //inicializar
        this._listado = {};
    }


    crearTarea( desc = '' ){

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;

    }

}


module.exports = Tareas;