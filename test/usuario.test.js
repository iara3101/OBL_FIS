const usuario = require('../dominio/usuario.js');

let usuarioKike = new usuario("Kike", 1);

test('Creacion de un usuario', () => {
    expect(usuarioKike.nombre).toBe("Kike");
    expect(usuarioKike.idUsuario).toBe(1);
});

test('Devolver el nombre', () => {
    expect(usuarioKike.getNombre()).toBe("Kike");
});

test('Devolver el id', () => {
    expect(usuarioKike.getId()).toBe(1);
});

test('to String del usuario', () => {
    expect(usuarioKike.toString()).toBe("Kike; id: 1");
});