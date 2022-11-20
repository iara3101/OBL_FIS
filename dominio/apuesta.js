import usuario from './usuario.js';
export default class apuesta{
    constructor(unE1,unE2,unaFecha2,unUsuario, dinero){
        this.equipo1=unE1;
        this.equipo2=unE2;
        this.fecha2=unaFecha2;
        this.usuario=unUsuario;
        this.monto = dinero;
    }
    toString(){
        return this.equipo1 + " vs " + this.equipo2 + ", hecha por: " + this.usuario + " el dia " + this.fecha2 + " y aposto: $" + this.monto;
    }
    getE1(){
        return this.equipo1;
    }
    getE2(){
        return this.equipo2;
    }
    getFecha(){
        return this.fecha2;
    }
    getUsuario(){
        return this.usuario;
    }
    getMonto(){
        return this.monto;
    }
}
//module.export = apuesta;