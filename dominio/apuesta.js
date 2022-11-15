export default class apuesta{
    constructor(unE1,unE2,unaFecha2,unUsuario){
        this.equipo1=unE1;
        this.equipo2=unE2;
        this.fecha2=unaFecha2;
        this.usuario=unUsuario;
    }
    toString(){
        return this.unE1 + " vs " + this.unE2;
    }
}