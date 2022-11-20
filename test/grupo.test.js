const dia = new Date();
import usuario from '../dominio/usuario.js';
import grupo from'../dominio/grupo.js';

let hoy = dia.getDate();
let usuarioPepe = new usuario("Pepe", 3);
let losPibes = new grupo("Los Pibes", 11, hoy, usuarioPepe, true, true);

test('Creacion de un grupo', () => {
    expect(losPibes.nombreGrupo).toBe("Los Pibes");
    expect(losPibes.idGrupo).toBe(11);
    expect(losPibes.listaIntegrantes).toStrictEqual([usuarioPepe]);
    expect(losPibes.tipoGrupo).toBe(true);
    expect(losPibes.tipoApuesta).toBe(true);
    expect(losPibes.listaApuestas).toStrictEqual([]);
    expect(losPibes.fecha).toBe(hoy);
    expect(losPibes.admin).toBe(usuarioPepe);
});

test('to String del grupo', () => {
    expect(losPibes.toString()).toBe("Los Pibes, 1 integrantes.");
});

test('Devolver el nombre del grupo', () => {
    expect(losPibes.getNombreGrupo()).toBe("Los Pibes");
});

test('Devolver el id del grupo', () => {
    expect(losPibes.getIdGrupo()).toBe(11);
});

test('Devolver la lista de integrantes del grupo', () => {
    expect(losPibes.getListaIntegrantes()).toStrictEqual([usuarioPepe]);
});

test('Devolver el tipo de grupo', () => {
    expect(losPibes.getTipoGrupo()).toBe(true);
});

test('Devolver el tipo de apuesta', () => {
    expect(losPibes.getTipoApuesta()).toBe(true);
});

test('Devolver la lista de apuestas del grupo', () => {
    expect(losPibes.getListaApuestas()).toStrictEqual([]);
});

test('Devolver la fecha de creacion del grupo', () => {
    expect(losPibes.getFecha()).toBe(hoy);
});

test('Devolver el admin del grupo', () => {
    expect(losPibes.getAdmin()).toBe(usuarioPepe);
});