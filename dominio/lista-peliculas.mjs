export default class ListaPeliculas {

  constructor() {
    this.peliculas = [];
  }

  agregar(pelicula) {
    let peliculaEnCartelera = this.peliculas.some(m => m.titulo == pelicula.titulo);
    if (!peliculaEnCartelera) {
      this.peliculas.push(pelicula);
    } else {
      throw new Error(`No se pudo agregar. ${pelicula.titulo} ya se encuentra en cartelera.`);
    }
  }

  getPeliculas() {
    return this.peliculas;
  }
}