//export default 
class apuesta{
    constructor(unE1,unE2,unaFecha2,unUsuario, dinero){
        this.equipo1=unE1;
        this.equipo2=unE2;
        this.fecha2=unaFecha2;
        this.usuario=unUsuario;
        this.monto = dinero;
    }
    toString(){
        return this.equipo1.getNombreEquipo() + " vs " + this.equipo2.getNombreEquipo() + " hecha por: " + this.usuario.getNombre();
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
module.exports = apuesta;