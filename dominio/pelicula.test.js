import Pelicula from './pelicula.mjs';

test('creación de una película', () => {
  let unaPelicula = new Pelicula("Indiana Jones", "Aventura", 1981);
  expect(unaPelicula.titulo).toBe("Indiana Jones");
  expect(unaPelicula.genero).toBe("Aventura");
  expect(unaPelicula.anio).toBe(1981);
});