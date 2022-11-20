import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
import {MDCSnackbar} from '@material/snackbar';
//import ListaPeliculas from '../../dominio/lista-peliculas.mjs';
//import Pelicula from '../../dominio/pelicula.mjs';
import sistema from '../../dominio/sistema.js';
import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';
import equipo from '../../dominio/equipo.js';

//const grupoActual = ;
let miSistema = new sistema();
var grupoActual = 0;
window.addEventListener("load", inicio);
function inicio(){
  console.log("entra");
  miSistema.agregarEquipos();
  miSistema.agregarUsuariosPrueba();
  miSistema.crearGrupoPrueba();
  //const grupoActual = miSistema.darGrupo("Grupo Prueba");
  miSistema.agregarPosibleIntegrante(miSistema.darUsuario(1));
  miSistema.crearApuestasPrueba();
  mostrarGrupos();
  //alert(miSistema.listaGrupos[0].getListaApuestas());
}

function mostrarApuestas(){
  let combo2=document.getElementById("listaApuestas");
      combo2.innerHTML="";
      for(let laApuesta of grupoActual.getListaApuestas()){
        let nodoOp =document.createElement("li");
        let nodoTexto= document.createTextNode(laApuesta); 
        nodoOp.appendChild(nodoTexto);
        combo2.appendChild(nodoOp);
      }
}

function mostrarGrupos(){
  document.getElementById("gruposCreados").innerHTML = "";
  let combo2=document.getElementById("gruposCreados");
      combo2.innerHTML="";
      for(let unG of miSistema.listaGrupos){
        let nodoOp =document.createElement("li");
        let nodoTexto= document.createTextNode(unG.getNombreGrupo()); 
        nodoOp.appendChild(nodoTexto);
        combo2.appendChild(nodoOp);
       }
}

function mostrarIntegrantes(grupo){
  let combo3 = document.getElementById('listaIntegrantes');
  combo3.innerHTML = "";
  for(let us of grupo.getListaIntegrantes()){
    let nodo3 = document.createElement("li");
    let nodoTexto3 = document.createTextNode(us);
    nodo3.appendChild(nodoTexto3);
    combo3.appendChild(nodo3);
  }
}


document.getElementById('botonVerDetallesGrupo').addEventListener('click', mostrarGrupo);
function mostrarGrupo(){
  let nombreGrupo = document.getElementById('nombreGrupo').value;
  if(miSistema.validarCampo(nombreGrupo)){
    let miGrupo = miSistema.darGrupo(nombreGrupo);
    if(miSistema.buscarGrupo(nombreGrupo)){
      grupoActual = miGrupo;
      document.getElementById('nombreDetalleGrupo').innerHTML = "";
      document.getElementById('idCard2').style.display="block";
      document.getElementById('registradorApuesta').style.display="none";
      document.getElementById('gruposCreados').style.display = "none";
      document.getElementById('tituloListaGrupos').style.display = "none";
      document.getElementById('seleccionGrupo').style.display = "none";
      document.getElementById('irApuestas').style.display = "block";
      //let h2 =document.createElement("h2");
      let nodoTexto= document.createTextNode(nombreGrupo); 
      document.getElementById('nombreDetalleGrupo').appendChild(nodoTexto);
      //document.getElementById('nombreDetalleGrupo').appendChild(h2);
      //document.getElementById('nombreDetalleGrupo').innerHTML = miGrupo.getNombreGrupo();
      document.getElementById('detallesExtra').innerHTML = "Admin: " + miGrupo.getAdmin() + ". Creado en la fecha: " + miGrupo.getFecha();
      mostrarIntegrantes(miGrupo);
      //alert(miGrupo);
      mostrarApuestas();
      //funcion que ponga los datos de la card
    } else {
      //alert("No hay un grupo con ese nombre.");
    }
  } else {
    alert("Ingrese un nombre de grupo.");
  }

}

document.getElementById('registrarApuesta').addEventListener("click", hacerApuesta);
function hacerApuesta(){
  let equipo1 = document.getElementById('equipo1').value;
  let equipo2 = document.getElementById('equipo2').value;
  let equipo1Aux = document.getElementById('equipo1').value.trim().toUpperCase();
  let equipo2Aux = document.getElementById('equipo2').value.trim().toUpperCase();
  let monto = parseInt(document.getElementById('inputTotalApuesta').value);
  if(equipo1.length == 0 || equipo2.length == 0){
    alert("Ingrese dos equipos para apostar");
  } else {
    if((miSistema.darEquipo(equipo1Aux)) && (miSistema.darEquipo(equipo2Aux))){
      if(equipo1Aux == equipo2Aux){
        alert("Ingrese dos equipos distintos.");
      } else {
        if(miSistema.validarMontoApostar(monto)){
          let apostar = miSistema.crearApuesta(equipo1, equipo2, miSistema.darUsuario(1), monto);
          if(miSistema.registrarApuesta(miSistema.darGrupo(grupoActual.getNombreGrupo()), apostar)){
            alert("Apuesta registrada con exito.");
          }
          document.getElementById('equipo1').value = "";
          document.getElementById('equipo2').value = "";
          document.getElementById('inputTotalApuesta').value = "";
          mostrarApuestas();
        } else {
          alert("Ingrese un monto a apostar mayor a 0.");
        }
      }
    } else {
      alert("Ingrese equipos validos.");
    }
  }
}

document.getElementById('botonCancelar2').addEventListener("click", cerrarDetalleGrupo);
function cerrarDetalleGrupo(){
  document.getElementById('idCard2').style.display="none";
  document.getElementById('registradorApuesta').style.display="none";
  document.getElementById('tituloListaGrupos').style.display = "block";
  document.getElementById('gruposCreados').style.display = "block";
  document.getElementById('seleccionGrupo').style.display = "block";
  document.getElementById('equipo1').value = "";
  document.getElementById('equipo2').value = "";
  document.getElementById('inputTotalApuesta').value = "";
  grupoActual = 0;
}

document.getElementById('irApuestas').addEventListener("click", mostrarApostador)
function mostrarApostador(){
  document.getElementById('registradorApuesta').style.display = "block";
  document.getElementById('irApuestas').style.display = "none";
}

//para mostrar la card luego del boton clickeado
document.getElementById('botonCrear').addEventListener('click',hacerDisplay);
function hacerDisplay(){
 document.getElementById('idCard').style.display="block";
 document.getElementById('gruposCreados').style.display = "none";
 document.getElementById('seleccionGrupo').style.display = "none";
 document.getElementById('tituloListaGrupos').style.display = "none";
}

// para dejar de mostrar la card cuando cancela
document.getElementById('botonCancelar').addEventListener('click',sacarDisplay);
function sacarDisplay(){
  document.getElementById("nombreNuevo").value = "";
  document.getElementById("idInputUsuario").value = "";
  miSistema.posiblesIntegrantes = [];
  document.getElementById('idCard').style.display="none";
  document.getElementById('gruposCreados').style.display = "block";
  document.getElementById('seleccionGrupo').style.display = "block";
  document.getElementById('tituloListaGrupos').style.display = "block";
}

//para crear el grupo
document.getElementById('botonCrearConfir').addEventListener('click',crearGrupo);
function crearGrupo(){ //hay que acordarse del que no hay checkeos todavia
   let nombreGr =document.getElementById("nombreNuevo").value;
   //let tipoPublico= document.getElementById("checkPublico").checked;
   let apuestaAmistosa= document.getElementById("checkApuestaAmistosa").checked;
   //let apuestaMonetaria= document.getElementById("checkApuestaPrivada").checked;
   if(miSistema.validarCampo(nombreGr)){
      miSistema.crearGrupo(nombreGr, apuestaAmistosa, miSistema.posiblesIntegrantes);// tipo:amistoso/plata (amistoso=true) primero y segundo privado/publico(privado=true)
      document.getElementById('idCard').style.display="none";
      document.getElementById("nombreNuevo").value = "";
      miSistema.resetPosiblesIntegrantes();
      miSistema.agregarPosibleIntegrante(miSistema.darUsuario(1));
      let combo=document.getElementById("posiblesParticipantesDelGrupo");
      combo.innerHTML="";
      mostrarGrupos();
      document.getElementById('gruposCreados').style.display = "block";
      document.getElementById('seleccionGrupo').style.display = "block";
      document.getElementById('tituloListaGrupos').style.display = "block";
      alert("Grupo creado!!");
   } else {
      document.getElementById("nombreNuevo").value = "";
      alert("INGRESE UN NOMBRE PARA EL GRUPO.");
   }
}

document.getElementById("botonAgregarParticipante").addEventListener("click", agregarIntegrante);
function agregarIntegrante(){
  let idUs = parseInt(document.getElementById("idInputUsuario").value);
  if(miSistema.validarNumero(idUs)){
    let nuevoUsuario = miSistema.darUsuario(idUs);
    if(miSistema.agregarPosibleIntegrante(nuevoUsuario)){
      let nuevoIntegrante = miSistema.darUsuario(idUs);
      let combo=document.getElementById("posiblesParticipantesDelGrupo");
      let nodoOp =document.createElement("li");
      let nodoTexto= document.createTextNode(nuevoIntegrante); 
      nodoOp.appendChild(nodoTexto);
      combo.appendChild(nodoOp);
      document.getElementById("idInputUsuario").value = "";
    } else {
      document.getElementById("idInputUsuario").value = "";
    }
  } else {
    alert("No hay un usuario con esa id");
    document.getElementById("idInputUsuario").value = "";
  }
}



const checkbox = new MDCCheckbox(document.querySelector('.mdc-checkbox'));
const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
formField.input = checkbox;

const fabRipple = new MDCRipple(document.querySelector('.mdc-fab'));
// Este const es delboton agregar 

//const listaPeliculas = new ListaPeliculas();

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);


const textField = new MDCTextField(document.querySelector('.mdc-text-field'));


const tabBar = new MDCTabBar(document.querySelector(".mdc-tab-bar"));
tabBar.listen("MDCTabBar:activated", (activatedEvent) => {
  document.querySelectorAll(".content").forEach((element, index) => {
    if (index === activatedEvent.detail.index) {
      element.classList.remove("sample-content--hidden");
    } else {
      element.classList.add("sample-content--hidden");
    }
  });
});



// Esto es el JS del boton Crear
const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});