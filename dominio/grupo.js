import apuesta from './apuesta.js';
export default class grupo{
    constructor(unNombre, idUnGrupo, unaFecha, unUsuario, tipoGrupoPrivado ,tipoApuestaAmistosa){
        this.nombreGrupo=unNombre;
        this.idGrupo = idUnGrupo;
        this.listaIntegrantes=[];
        this.tipoGrupo = tipoGrupoPrivado; //si es true es privado, si es false es por publico
        this.tipoApuesta = tipoApuestaAmistosa; //si es true es amistosa, si es false en monetaria
        this.listaApuestas=[];
        this.fecha=unaFecha;
        this.admin = unUsuario;
    }
    toString(){
        return this.nombreGrupo + ", " + this.listaIntegrantes.length + " integrantes.";
    }
}