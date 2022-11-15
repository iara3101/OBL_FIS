class sistema{
    constructor(){
        this.idSistemaUsuario = 1;
        this.idSistemaGrupo = 1;
        this.listaEquipos = [];
        this.listaUsuarios = [];
        this.listaGrupos = [];
    }
    agregarEquipo(equipo, lista){
        lista.push(equipo);
    }
    agregarUsuario(usuario, lista){
        usuario.idUsuario = this.idSistemaUsuario;
        lista.push(usuario);
        this.idSistemaUsuario ++;
    }
    agregarGrupo(grupo, lista){
        grupo.idGrupo = this.idSistemaGrupo;
        lista.push(grupo);
        this.idSistemaGrupo ++;
    }
    darEquipo(nombreEquipo){
        let control = true;
        for(let i=0; i<this.listaEquipos.length && control; i++){
            if(this.listaEquipos[i].toUpperCase() == nombreEquipo.toUpperCase()){
                control = false;
            }
        }
        if(!control){
            return nombreEquipo.toUpperCase();
        } else {
            return NULL;
        }
    }
    darUsuario(id){
        let control = true;
        for(let i=0; i<this.listaUsuarios.length && control; i++){
            if(this.listaUsuarios[i].idUsuario == id){
                control = false;
            }
        }
        if(!control){
            return this.listaUsuarios[i];
        } else {
            return NULL;
        }
    }
    darGrupo(id){
        let control = true;
        for(let i=0; i<this.listaGrupos.length && control; i++){
            if(this.idGrupo == id){
                control = false;
            }
        }
        if(!control){
            return this.listaGrupos[i];
        } else {
            return NULL;
        }
    }
}
class apuesta{
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
class equipo{
    constructor(unNombre){
        this.nombreEquipo = unNombre;
    }

    getNombreEquipo(){
        return this.unNombre;
    }
}
class usuario{
    constructor(nombreUsuario, unaIdUsuario){
        this.nombre = nombreUsuario;
        this.idUsuario = unaIdUsuario;
    }
    toString(){
        return "Nombre: " + this.nombre + "; id: " + this.id;
    }
}
class grupo{
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
