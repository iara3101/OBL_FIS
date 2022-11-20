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
        this.posiblesIntegrantes=[];
    }
    agregarUsuario(us){
        let control = true;
        for(let i=0; i<this.listaUsuarios.length && control; i++){
            if((us.getId() == this.listaUsuarios[i].getId()) && (us.getNombre() == this.listaUsuarios[i].getNombre())){
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
            if(this.listaGrupos[i].getNombreGrupo() == grupo.getNombreGrupo()){
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
        //let control = true;
        //let aux = 0;
        for(let i=0; i<this.listaEquipos.length; i++){
            if(this.listaEquipos[i].getNombreEquipo().toUpperCase() == nombreEquipo.toUpperCase()){
                return true;
            }
        }
        return false;
    }
    darNombreEquipo(nombreEquipo){
        let control = true;
        let aux = "";
        for(let i=0; i<this.listaEquipos.length && control; i++){
            if(this.listaEquipos[i].getNombreEquipo().toUpperCase() == nombreEquipo.toUpperCase()){
                control = false;
                aux = this.listaEquipos[i].getNombreEquipo();
            }
        }
        if(!control){
            return aux;
        } else {
            alert("No hay un equipo con ese nombre.");
        }
    }
    darUsuario(id){
        let control = true;
        let aux = 0;
        for(let i=0; i<this.listaUsuarios.length && control; i++){
            if(this.listaUsuarios[i].getId() == id){
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
    darGrupo(nombre){
        let control = true;
        let aux = 0;
        for(let i=0; i<this.listaGrupos.length && control; i++){
            if(this.listaGrupos[i].getNombreGrupo() == nombre){
                control = false;
                aux = i;
            }
        }
        if(!control){
            return this.listaGrupos[aux];
        } else {
            alert("No hay un grupo con el nombre: " + nombre);
        }
    }
    buscarGrupo(nombre){
        let control = false;
        for(let i=0; i<this.listaGrupos.length && !control; i++){
            if(this.listaGrupos[i].getNombreGrupo() == nombre){
                control = true;
            }
        }
        return control;
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
        equipos[3] = "PaisesBajos";
        equipos[4] = "ArabiaSaudita";
        equipos[5] = "CoreadelSur";
        equipos[6] = "Gales";
        equipos[7]= "Polonia";
        equipos[8] = "Argentina";
        equipos[9] = "CostaRica";
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
        equipos[25] = "España";
        equipos[26] = "Marruecos";
        equipos[27] = "Tunez";
        equipos[28] = "Canada";
        equipos[29] = "EstadosUnidos";
        equipos[30] = "Mexico";
        equipos[31] = "Uruguay";
        for(let i=0; i<equipos.length; i++){
            let aux = new equipo(equipos[i]);
            this.agregarEquipo(aux);
        }
    }
    crearGrupoPrueba(){
        let grupoPrueba = new grupo();
        grupoPrueba.nombreGrupo = "Grupo Prueba";
        grupoPrueba.idGrupo = this.idSistemaGrupo;
        //this.idSistemaGrupo++;
        grupoPrueba.listaIntegrantes = [this.listaUsuarios[0], this.listaUsuarios[1], this.listaUsuarios[2]];
        grupoPrueba.tipoGrupo = true;
        grupoPrueba.tipoApuesta = true;
        grupoPrueba.listaApuestas = [];
        grupoPrueba.fecha = dia.getDate() + "/" + dia.getMonth() + "/" + dia.getFullYear();
        grupoPrueba.admin = this.listaUsuarios[0];
        this.agregarGrupo(grupoPrueba);
    }
    crearApuestasPrueba(){
        let apuesta1 = this.crearApuesta(this.darNombreEquipo("uruguay"), this.darNombreEquipo("ecuador"), this.listaUsuarios[1], 1500);
        this.registrarApuesta(this.listaGrupos[0], apuesta1);
        let apuesta2 = this.crearApuesta(this.darNombreEquipo("brasil"), this.darNombreEquipo("españa"), this.listaUsuarios[2], 2000);
        this.registrarApuesta(this.listaGrupos[0], apuesta2);
        let apuesta3 = this.crearApuesta(this.darNombreEquipo("inglaterra"), this.darNombreEquipo("brasil"), this.listaUsuarios[5], 1850);
        this.registrarApuesta(this.listaGrupos[0], apuesta3);
    }
    crearGrupo(nombre, tApuesta, lista){
        let nuevoGrupo = new grupo();
        nuevoGrupo.nombreGrupo = nombre;
        nuevoGrupo.idGrupo = this.idSistemaGrupo;
        //this.idSistemaGrupo++;
        nuevoGrupo.tipoApuesta=tApuesta;
        nuevoGrupo.tipoGrupo = true;
        nuevoGrupo.listaApuestas = [];
        nuevoGrupo.listaIntegrantes = lista;
        nuevoGrupo.fecha = dia.getDate() + "/" + dia.getMonth() + "/" + dia.getFullYear();
        nuevoGrupo.admin = this.listaUsuarios[0];
        this.agregarGrupo(nuevoGrupo);
        return nuevoGrupo;
    }
    crearApuesta(e1, e2, us, cantApostar){
        let fecha = dia.getDate() + "/" + dia.getMonth() + "/" + dia.getFullYear();
        let nuevaApuesta = new apuesta(e1, e2, fecha, us, cantApostar);
        return nuevaApuesta;
    }
    registrarApuesta(grupo, apuesta){
        let control = true;
        for(let i=0; i<grupo.getListaApuestas().length && control; i++){
            let usuario1 = grupo.getListaApuestas()[i].getUsuario();
            if(usuario1.getId() == apuesta.getUsuario().getId()){
                control = false;
            }
            //alert(grupo.getListaApuestas()[i].getUsuario());
        }
        if(control){
            grupo.listaApuestas.push(apuesta);
            return true;
            //alert("Apuesta realizada con exito.");
        } else {
            alert("Usted ya ha registrado su apuesta.");
            return false;
        }
    }
    agregarUsuarioAlGrupo(us, gr){
        let control = true;
        for(let i=0; i<gr.listaIntegrantes.length && control; i++){
            if(gr.listaIntegrantes[i].getUsuario() == us.idUsuario()){
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
    validarNumero(usId){
            return (parseInt(usId)>0  && parseInt(usId)<=6);
    }

    validarMontoApostar(monto){
        return monto > 0;
    }
    agregarEquipo(equipo){
        this.listaEquipos.push(equipo);
    }
    agregarPosibleIntegrante(usuario){
        let control = true;
        for(let i=0; i<this.posiblesIntegrantes.length && control; i++){
            if(this.posiblesIntegrantes[i].getId() == usuario.getId()){
                control = false;
            }
        }
        if(control){
            this.posiblesIntegrantes.push(usuario);
            //consoleLog(this.posiblesIntegrantes);
            return true;
        } else {
            //alert("Este usuario ya esta en la lista de integrantes.");
            return false;
        }
    }
    resetPosiblesIntegrantes(){
        this.posiblesIntegrantes = [];
    }
}
//module.export = sistema;