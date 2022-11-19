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

let miSistema = new sistema();
window.addEventListener("load", inicio);
function inicio(){
  console.log("entra");
  miSistema.agregarEquipos();
  miSistema.agregarUsuariosPrueba();
  miSistema.crearGrupoPrueba();
  miSistema.agregarPosibleIntegrante(miSistema.darUsuario(1));
  //alert(miSistema.posiblesIntegrantes[0]);
}

//para mostrar la card luego del boton clickeado
document.getElementById('botonCrear').addEventListener('click',hacerDisplay);
function hacerDisplay(){
 document.getElementById('idCard').style.display="block";
}

// para dejar de mostrar la card cuando cancela
document.getElementById('botonCancelar').addEventListener('click',sacarDisplay);
function sacarDisplay(){
  document.getElementById("nombreNuevo").value = "";
  document.getElementById("idInputUsuario").value = "";
  miSistema.posiblesIntegrantes = [];
  document.getElementById('idCard').style.display="none";
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