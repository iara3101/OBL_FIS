export default class equipo{
    constructor(unNombre){
        this.nombreEquipo = unNombre;
    }

    getNombreEquipo(){
        return this.nombreEquipo;
    }
}
module.exports = equipo;