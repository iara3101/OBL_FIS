const equipo = require('../dominio/equipo.js');

let unEquipo = new equipo("Uruguay");

test('Creacion de un equipo', () => {
    expect(unEquipo.nombreEquipo).toBe("Uruguay");
});

test('Mostrar nombre', () => {
    expect(unEquipo.getNombreEquipo()).toBe('Uruguay');
});