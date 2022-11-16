import apuesta from './apuesta.js';
export default class grupo{
    constructor(unNombre, idUnGrupo, unaFecha, unUsuario, unTipo){
        this.nombreGrupo=unNombre;
        this.idGrupo = idUnGrupo;
        this.listaIntegrantes=[];
        this.tipoGrupo = unTipoGrupo;
        this.tipo = unTipo; //si es true es amistoso, si es false es por dinero
        this.listaApuestas=[];
        this.fecha=unaFecha;
        this.admin = unUsuario;
    }
    toString(){
        return this.nombreGrupo + ", " + this.listaIntegrantes.length + " integrantes.";
    }
}