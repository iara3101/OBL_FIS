//export default 
class usuario{
    constructor(nombreUsuario, unaIdUsuario){
        this.nombre = nombreUsuario;
        this.idUsuario = unaIdUsuario;
    }
    toString(){
        return "Nombre: " + this.nombre + "; id: " + this.idUsuario;
    }
    getNombre(){
        return this.nombre;
    }
}
module.exports = usuario;