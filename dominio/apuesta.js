export default class apuesta{
    constructor(unE1,unE2,unaFecha2,unUsuario, dinero){
        this.equipo1=unE1;
        this.equipo2=unE2;
        this.fecha2=unaFecha2;
        this.usuario=unUsuario;
        this.monto = dinero;
    }
    toString(){
        return this.unE1 + " vs " + this.unE2 + " hecha por: " + this.usuario.nombre;
    }
}