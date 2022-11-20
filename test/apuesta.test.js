import usuario from '../dominio/usuario.js';
import apuesta from '../dominio/apuesta.js';
import equipo from '../dominio/equipo.js';
const dia = new Date();

let hoy = dia.getDate();
let unUsuario = new usuario("Pepe", 3);
let uru = new equipo("Uruguay");
let bra = new equipo("Brasil");
let unaApuesta = new apuesta(bra, uru, hoy, unUsuario, 500);

test('Creacion de una apuesta', () => {
    expect(unaApuesta.equipo1).toBe(bra);
    expect(unaApuesta.equipo2).toBe(uru);
    expect(unaApuesta.fecha2).toBe(hoy);
    expect(unaApuesta.usuario).toBe(unUsuario);
    expect(unaApuesta.monto).toBe(500);
});

test('to String de la apuesta', () => {
    expect(unaApuesta.toString()).toBe("Brasil vs Uruguay hecha por: Pepe");
});

test('Devolver equipo 1', () => {
    expect(unaApuesta.getE1()).toBe(bra);
});

test('Devolver equipo 2', () => {
    expect(unaApuesta.getE2()).toBe(uru);
});

test('Devolver la fecha', () => {
    expect(unaApuesta.getFecha()).toBe(hoy);
});

test('Devolver el usuario', () => {
    expect(unaApuesta.getUsuario()).toBe(unUsuario);
});

test('Devolver el monto', () => {
    expect(unaApuesta.getMonto()).toBe(500);
});