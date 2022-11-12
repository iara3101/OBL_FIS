class Apuesta{
    constructor(unE1,unE2,unaFecha2,unUsuario){
        this.equipo1=unE1;
        this.equipo2=unE2;
        this.fecha2=unaFecha2;
        this.usuario=unUsuario;
    }
    getEquipo1Apuesta(){
        return this.equipo1;
    }
    getEquipo2Apuesta(){
        return this.equipo2;
    }
    getUsuarioApuesta(){
        return this.usuario
    } 
    getfechaApuesta(){
        return this.fecha2;
    }
}