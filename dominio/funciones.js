window.addEventListener("load", inicio);
let miSistema = new sistema();

function inicio(){
    agregarUsuariosPrueba();
    agregarEquipos();
}

function agregarUsuariosPrueba(){ //seran un total de 6 usuarios, incuyendo al operador
    let usuario1 = new usuario("Mateo Arias", miSistema.idSistemaUsuario); //su id es 1, es el "operador"
    miSistema.agregarUsuario(usuario1); //caada vez que llamo a agregarUsuario, la id de usuario se incrementa
    let usuario2 = new usuario("Santiago Lopez", miSistema.idSistemaUsuario); //su id es 2
    miSistema.agregarUsuario(usuario2);
    let usuario3 = new usuario("Iara Vieira", miSistema.idSistemaUsuario); //su id es 3
    miSistema.agregarUsuario(usuario3);
    let usuario4 = new usuario("Maria Martinez", miSistema.idSistemaUsuario); //su id es 4
    miSistema.agregarUsuario(usuario4);
    let usuario5 = new usuario("Enrique Torres", miSistema.idSistemaUsuario); //su id es 5
    miSistema.agregarUsuario(usuario5);
    let usuario6 = new usuario("Ismael De Leon", miSistema.idSistemaUsuario); //su id es 6
    miSistema.agregarUsuario(usuario6);
}

function agregarEquipos(){
    let equipos = [];
    for(let i=0; i<31; i++){
        equipos.push();
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
    equipos[25] = "España";
    equipos[26] = "Marruecos";
    equipos[27] = "Tunez";
    equipos[28] = "Canada";
    equipos[29] = "Estados Unidos";
    equipos[30] = "Mexico";
    equipos[31] = "Uruguay";
    for(let i=0; i<equipos.length; i++){
        let aux = new equipo(equipos[i]);
        miSistema.agregarEquipo(aux);
    }
}