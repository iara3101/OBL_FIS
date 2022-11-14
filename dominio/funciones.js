window.addEventListener("load", inicio);
let miSistema = new sistema();

function inicio(){
    agregarUsuariosPrueba();
}

function agregarUsuariosPrueba(){ //seran un total de 6 usuarios, incuyendo al operador
    let usuario1 = new usuario("Mateo Arias", miSistema.idSistemaUsuario); //su id es 1, es el "operador"
    miSistema.agregarUsuario(usuario1);
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