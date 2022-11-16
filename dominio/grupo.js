import apuesta from './apuesta.js';
export default class grupo{
    constructor(unNombre, idUnGrupo, unaFecha, unUsuario, unTipo, unTipoGrupo){
        this.nombreGrupo=unNombre;
        this.idGrupo = idUnGrupo;
        this.listaIntegrantes=[];
        this.tipoGrupo = unTipoGrupo; //si es true es privado, si es false es publico
        this.tipo = unTipo; //si es true es amistoso, si es false es por dinero
        this.listaApuestas=[];
        this.fecha=unaFecha;
        this.admin = unUsuario;
    }
    toString(){
        return this.nombreGrupo + ", " + this.listaIntegrantes.length + " integrantes.";
    }
}