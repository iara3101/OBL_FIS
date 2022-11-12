const MIN_ANIO = 1888;
const MAX_ANIO = 2021;

export default class Pelicula {

  constructor(titulo, genero, anio) {
    this.titulo = titulo;
    this.genero = genero;
    this.setAnio(anio);
  }

  setAnio(anio) {
    if (anio >= MIN_ANIO && anio <= MAX_ANIO) {
      this.anio = anio;
    } else {
      throw new Error(`El año ingresado es incorrecto. La pelicula debe ser de los años entre ${MIN_ANIO} y ${MAX_ANIO}`);
    }
  }
}