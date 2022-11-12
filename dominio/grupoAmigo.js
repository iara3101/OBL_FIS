class GrupoAmigo{
    constructor(unNombre,unaListaA,unaFecha,unUsuario){
        this.nombreGrupo=unNombre;
        this.listaIntegrantes=unaListaA;
        this.listaApuestas=[];
        this.fecha=unaFecha;
    }
    getNombreGrupo(){
        return this.nombreGrupo;
    }

    getListaIntegrantes(){
        return this.listaIntegrantes;
    }

    getListaApuestas(){
        return this.listaApuestas;
    }
    getFecha(){
        return this.fecha;
    }

}