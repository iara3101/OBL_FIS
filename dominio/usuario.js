export default class usuario{
    constructor(nombreUsuario, unaIdUsuario){
        this.nombre = nombreUsuario;
        this.idUsuario = unaIdUsuario;
    }
    toString(){
        return this.nombre + "; id: " + this.idUsuario;
    }
    getNombre(){
        return this.nombre;
    }
    getId(){
        return this.idUsuario;
    }
}
module.exports = usuario;
