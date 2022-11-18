const usuario = require('../dominio/usuario.js');
const apuesta = require('../dominio/apuesta.js');
const equipo = require('../dominio/equipo.js');
const grupo = require('../dominio/grupo.js');
const sistema = require('../dominio/sistema.js');
const dia = new Date();

let hoy = dia.getDate();
let unUsuario = new usuario("Pepe", 3);
let uru = new equipo("Uruguay");
let bra = new equipo("Brasil");
let losPibes = new grupo("Los Pibes", 15, hoy, unUsuario, true, true);
let unaApuesta = new apuesta(bra, uru, hoy, unUsuario, 500);
let elSistema = new sistema();

test('Creacion del sistema', () => {
    expect(elSistema.idSistemaUsuario).toBe(1);
    expect(elSistema.idSistemaGrupo).toBe(1);
    expect(elSistema.listaEquipos).toStrictEqual([]);
    expect(elSistema.listaUsuarios).toStrictEqual([]);
    expect(elSistema.listaGrupos).toStrictEqual([]);
    expect(elSistema.posiblesIntegrantes).toStrictEqual([]);
});

test('Agregar usuario al sistema', () => {
    elSistema.agregarUsuario(unUsuario);
    expect(elSistema.listaUsuario).toStrictEqual([unUsuario]);
});

test('Agregar usuarios de prueba al sistema', () => {
    elSistema.agregarUsuariosPrueba();
    expect(elSistema.listaUsuario.length).toBe(7);
});

test('Agregar grupo al sistema', () => {
    elSistema.agregarGrupo(losPibes);
    expect(elSistema.listaGrupos).toStrictEqual([losPibes]);
});

test('Agregar equipos de prueba al sistema', () => {
    elSistema.agregarEquipos();
    expect(elSistema.listaEquipos.length).toBe(32);
});

test('Dar un equipo del sistema', () => {  
    expect(elSistema.darEquipo("Uruguay")).toBe(uru);
});

test('Dar un usuario del sistema', () => {  
    expect(elSistema.darUsuario(3)).toBe(unUsuario);
});