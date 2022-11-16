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

window.addEventListener("load", inicio);
function inicio(){
  console.log("entra");
  let miSistema = new sistema();
  miSistema.agregarEquipos();
  miSistema.agregarUsuariosPrueba();
  miSistema.crearGrupoPrueba();
  alert(miSistema.darUsuario(3));
}

//para mostrar la card luego del boton clickeado
document.getElementById('botonCrear').addEventListener('click',hacerDisplay);
function hacerDisplay(){
  console.log("entra 2");
 document.getElementById('idCard').style.display="block";
}

// para dejar de mostrar la card cuando cancela
document.getElementById('botonCancelar').addEventListener('click',sacarDisplay);
function sacarDisplay(){
 document.getElementById('idCard').style.display="none";
}


const checkbox = new MDCCheckbox(document.querySelector('.mdc-checkbox'));
const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
formField.input = checkbox;

const fabRipple = new MDCRipple(document.querySelector('.mdc-fab'));
// Este const es delboton agregar 
import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';

//para mostrar la card luego del boton clickeado
document.getElementById('botonCrear').addEventListener('click',hacerDisplay);
function hacerDisplay(){
 document.getElementById('idCard').style.display="block";
}

// Este const es delboton agregar 

//const listaPeliculas = new ListaPeliculas();

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);


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

const textFieldTitle = new MDCTextField(document.getElementById('title'));
const textFieldYear = new MDCTextField(document.getElementById('year'));
const selectGenre = new MDCSelect(document.querySelector('.mdc-select'));

const addButton = new MDCRipple(document.getElementById('addButton'));
addButton.listen('click', () => {
  let title = textFieldTitle.value;
  let year = textFieldYear.value;
  let genre = selectGenre.value;
  try {
    let newPelicula = new Pelicula(title, genre, year);
    listaPeliculas.agregar(newPelicula);
  } catch (error) {
    const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
    snackbar.labelText = error.message;
    snackbar.open();
  } finally {
    let peliculas = listaPeliculas.getPeliculas();
    console.log(peliculas);
  }
})