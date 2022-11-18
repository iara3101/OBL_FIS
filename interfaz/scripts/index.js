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
  alert(miSistema.darUsuario(3));
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
  /* if(miSistema.validarCampo(nombreGr)){
      miSistema.crearGrupo(nombreGr,apuestaAmistosa);// tipo:amistoso/plata (amistoso=true) primero y segundo privado/publico(privado=true)
      document.getElementById('idCard').style.display="none";
      document.getElementById("nombreNuevo").value = "";
      miSistema.resetPosiblesIntegrantes();
      alert("Grupo creado!!");
   } else {
      document.getElementById("nombreNuevo").value = "";
      alert("INGRESE UN NOMBRE PARA EL GRUPO.");
   }*/
}

document.getElementById("botonAgregarParticipante").addEventListener("click", agregarIntegrante);
function agregarIntegrante(){
  /*let idUs = juan//document.getElementById("idInputUsuario").value;
  
  let nodoLi =document.createElement("li");
  let nodoTexto= document.createTextNode(idUs); 
  nodoLi.appendChild(nodoTexto);
  nodoTexto.appendChild(nodoLi);*/
  let idUs = document.getElementById("idInputUsuario").value;
  let combo=document.getElementById("posiblesParticipantesDelGrupo");
  //for(let elemento of datos){
      let nodoOp =document.createElement("li");
      let nodoTexto= document.createTextNode("Usuario con id: "+idUs); 
      nodoOp.appendChild(nodoTexto);
      combo.appendChild(nodoOp);
    // }
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