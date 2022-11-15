export default class usuario{
    constructor(nombreUsuario, unaIdUsuario){
        this.nombre = nombreUsuario;
        this.idUsuario = unaIdUsuario;
    }
    toString(){
        return "Nombre: " + this.nombre + "; id: " + this.id;
    }
}