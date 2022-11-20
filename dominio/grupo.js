import apuesta from './apuesta.js';
export default class grupo{
    constructor(unNombre, idUnGrupo, unaFecha, unUsuario, unTipo, unTipoGrupo){
        this.nombreGrupo=unNombre;
        this.idGrupo = idUnGrupo;
        this.listaIntegrantes=[];
        this.tipoGrupo = unTipoGrupo;
        this.tipoApuesta = unTipo; //si es true es amistoso, si es false es por dinero
        this.listaApuestas=[];
        this.fecha=unaFecha;
        this.admin = unUsuario;
    }
    toString(){
        return this.nombreGrupo + ", " + this.listaIntegrantes.length + " integrantes.";
    }
    getNombreGrupo(){
        return this.nombreGrupo;
    }
    getIdGrupo(){
        return this.idGrupo;
    }
    getListaIntegrantes(){
        return this.listaIntegrantes;
    }
    getTipoGrupo(){
        return this.tipoGrupo;
    }
    getTipoApuesta(){
        return this.tipoApuesta;
    }
    getFecha(){
        return this.fecha;
    }
    getAdmin(){
        return this.admin;
    }
    getListaApuestas(){
        return this.listaApuestas;
    }
}
//module.export = grupo;