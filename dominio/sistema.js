import apuesta from './apuesta.js';
import equipo from './equipo.js';
import grupo from './grupo.js';
import usuario from './usuario.js';
const dia = new Date();
export default class sistema{
    constructor(){
        this.idSistemaUsuario = 1;
        this.idSistemaGrupo = 1;
        this.listaEquipos = [];
        this.listaUsuarios = [];
        this.listaGrupos = [];
    }
    agregarUsuario(us){
        let control = true;
        for(let i=0; i<this.listaUsuarios.length && control; i++){
            if((us.idUsuario == this.listaUsuarios[i].idUsuario) && (us.nombre == this.listaUsuarios[i].nombre)){
                control = false;
            }
        }
        if(control){
            this.listaUsuarios.push(us);
            this.idSistemaUsuario++;
        } else {
            alert("Ya hay un usuario registrado con ese nombre y/o id");
        }
    }
    agregarGrupo(grupo){
        let control = true;
        for(let i=1; i<this.listaGrupos.length && control; i++){
            if(this.listaGrupos[i].nombre == grupo.nombre){
                control = false;
            }
        }
        if(control){
            this.listaGrupos.push(grupo);
            this.idSistemaGrupo++;
        } else {
            alert("Ya existe un grupo con ese nombre");
        }
    }
    darEquipo(nombreEquipo){
        let control = true;
        let aux = 0;
        for(let i=0; i<this.listaEquipos.length && control; i++){
            if(this.listaEquipos[i].toUpperCase() == nombreEquipo.toUpperCase()){
                control = false;
                aux = i;
            }
        }
        if(!control){
            return this.listaEquipos[aux];
        } else {
            alert("No existe un equipo registrado con ese nombre: " + nombreEquipo);
        }
    }
    darUsuario(id){
        let control = true;
        let aux = 0;
        for(let i=0; i<this.listaUsuarios.length && control; i++){
            if(this.listaUsuarios[i].idUsuario == id){
                control = false;
                aux = i;
            }
        }
        if(!control){
            return this.listaUsuarios[aux];
        } else {
            alert("No hay un usuario con la id: " + id);
        }
    }
    darGrupo(id){
        let control = true;
        let aux = 0;
        for(let i=0; i<this.listaGrupos.length && control; i++){
            if(this.listaGrupos[i].idGrupo == id){
                control = false;
                aux = i;
            }
        }
        if(!control){
            return this.listaGrupos[aux];
        } else {
            alert("No hay un grupo con la id: " + id);
        }
    }
    agregarUsuariosPrueba(){ //seran un total de 6 usuarios, incuyendo al operador
        let usuario1 = new usuario("Mateo Arias", this.idSistemaUsuario); //su id es 1, es el "operador"
        this.agregarUsuario(usuario1); //caada vez que llamo a agregarUsuario, la id de usuario se incrementa
        let usuario2 = new usuario("Santiago Lopez", this.idSistemaUsuario); //su id es 2
        this.agregarUsuario(usuario2);
        let usuario3 = new usuario("Iara Vieira", this.idSistemaUsuario); //su id es 3
        this.agregarUsuario(usuario3);
        let usuario4 = new usuario("Maria Martinez", this.idSistemaUsuario); //su id es 4
        this.agregarUsuario(usuario4);
        let usuario5 = new usuario("Enrique Torres", this.idSistemaUsuario); //su id es 5
        this.agregarUsuario(usuario5);
        let usuario6 = new usuario("Ismael De Leon", this.idSistemaUsuario); //su id es 6
        this.agregarUsuario(usuario6);
    }
    agregarEquipos(){
        let equipos = [];
        for(let i=0; i<31; i++){
            equipos.push("");
        }
        equipos[0] = "Alemania";
        equipos[1] = "Catar";
        equipos[2] = "Francia";
        equipos[3] = "Paises Bajos";
        equipos[4] = "Arabia Saudita";
        equipos[5] = "Corea del Sur";
        equipos[6] = "Gales";
        equipos[7]= "Polonia";
        equipos[8] = "Argentina";
        equipos[9] = "Costa Rica";
        equipos[10] = "Ghana";
        equipos[11] = "Portugal";
        equipos[12] = "Australia";
        equipos[13] = "Croacia";
        equipos[14] = "Inglaterra";
        equipos[15] = "Senegal";
        equipos[16] = "Belgica";
        equipos[17] = "Dinamarca";
        equipos[18] = "Iran";
        equipos[19] = "Serbia";
        equipos[20] = "Brasil";
        equipos[21] = "Ecuador";
        equipos[22] = "Japon";
        equipos[23] = "Suiza";
        equipos[24] = "Camerun";
        equipos[25] = "EspaÃ±a";
        equipos[26] = "Marruecos";
        equipos[27] = "Tunez";
        equipos[28] = "Canada";
        equipos[29] = "Estados Unidos";
        equipos[30] = "Mexico";
        equipos[31] = "Uruguay";
        for(let i=0; i<equipos.length; i++){
            let aux = new equipo(equipos[i]);
            this.agregarEquipo(aux);
        }
    }
    crearGrupoPrueba(){
        let grupoPrueba = new grupo();
        grupoPrueba.nombre = "Grupo Prueba";
        grupoPrueba.idGrupo = this.idSistemaGrupo;
        this.idSistemaGrupo++;
        grupoPrueba.listaIntegrantes = [this.listaUsuarios[0], this.listaUsuarios[1], this.listaUsuarios[2]];
        grupoPrueba.tipoGrupo = true;
        grupoPrueba.tipoApuesta = true;
        grupoPrueba.listaApuestas = [];
        grupoPrueba.fecha = dia.getDate();
        grupoPrueba.admin = this.listaUsuarios[0];
    }
    crearGrupoVacio(nombre,tGrupo, tApuesta){
        let nuevoGrupo = new grupo();
        nuevoGrupo.nombreGrupo = nombre;
        nuevoGrupo.idGrupo = this.idSistemaGrupo;
        this.idSistemaGrupo++;
        nuevoGrupo.tipoGrupo=tGrupo;
        nuevoGrupo.tipoApuesta=tApuesta;
        nuevoGrupo.listaApuestas = [];
        nuevoGrupo.listaIntegrantes = [this.listaUsuarios[0]];
        nuevoGrupo.fecha = dia.getDate();
        nuevoGrupo.admin = this.listaUsuarios[0];
        this.listaGrupos.push(nuevoGrupo);
        return nuevoGrupo;
    }
    crearApuesta(e1, e2, us, cantApostar){
        let nuevaApuesta = new apuesta(e1, e2, dia.getDate(), us, cantApostar);
        return nuevaApuesta;
    }
    registrarApuesta(grupo, apuesta){
        let control = true;
        for(let i=0; i<grupo.listaApuestas.length && control; i++){
            if(grupo.listaApuestas[i].usuario.idUsuario == apuesta.usuario.idUsuario){
                control = false;
            }
        }
        if(control){
            grupo.listaApuestas.push(apuesta);
        }
    }
    agregarUsuarioAlGrupo(us, gr){
        let control = true;
        for(let i=0; i<gr.listaIntegrantes.length && control; i++){
            if(gr.listaIntegrantes[i].idUsuario == us.idUsuario){
                control = false; //el usuario ya esta en el grupo
            }
        }
        if(control){
            gr.listaIntegrantes.push(us);
        } else {
            alert(us.toString() + " ya es un integrante de este grupo");
        }
    }
    validarCampo(texto){
        let aux = texto.trim();
        if(aux.length == 0){
            return false;
        } else {
            return true;
        }
    }
    agregarEquipo(equipo){
        this.listaEquipos.push(equipo);
    }
}