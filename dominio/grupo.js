import apuesta from './apuesta.js';
export default class grupo{
    constructor(unNombre, idUnGrupo, unaFecha, unUsuario){
        this.nombreGrupo=unNombre;
        this.idGrupo = idUnGrupo;
        this.listaIntegrantes=[];
        this.listaApuestas=[];
        this.fecha=unaFecha;
        this.admin = unUsuario;
    }
    toString(){
        return this.nombreGrupo + ", " + this.listaIntegrantes.length + " integrantes.";
    }
}