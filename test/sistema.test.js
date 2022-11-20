import usuario from '../dominio/usuario.js';
import apuesta  from '../dominio/apuesta.js';
import equipo from '../dominio/equipo.js';
import grupo from '../dominio/grupo.js';
import sistema from '../dominio/sistema.js';
const dia = new Date();

let hoy = dia.getDate();
let unUsuario = new usuario("Pepe", 19);
let uru = new equipo("Uruguay");
let bra = new equipo("Brasil");
let ePrueba = new equipo("Equipo de prueba");
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
    expect(elSistema.listaUsuarios.length).toBe(7);
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
    expect(elSistema.darUsuario(19)).toBe(unUsuario);
});

test('Dar un grupo del sistema', () => {  
    expect(elSistema.darGrupo("Los Pibes")).toBe(losPibes);
});

test('Buscar si existe un grupo del sistema', () => {  
    expect(elSistema.darGrupo("Los Pibes")).toBe(true);
});

test('Crear un grupo en el sistema', () => { 
    elSistema.crearGrupoPrueba(); 
    expect(elSistema.listaGrupos.length).toBe(2);
});

test('Crear un grupo nuevo en el sistema', () => { 
    let nuevoG = elSistema.crearGrupo("el Grupo", true, [unUsuario]); 
    expect(nuevoG.nombreGrupo).toBe("el Grupo");
    expect(nuevoG.idGrupo).toBe(1);
    expect(nuevoG.listaIntegrantes).toStrictEqual([unUsuario]);
    expect(nuevoG.tipoGrupo).toBe(true);
    expect(nuevoG.tipoApuesta).toBe(true);
    expect(nuevoG.listaApuestas).toStrictEqual([]);
    expect(nuevoG.fecha).toBe(hoy);
    expect(nuevoG.admin).toBe(unUsuario);

    expect(elSistema.listaGrupos.length).toBe(3);
});

test('Crear una apuesta nueva en el sistema', () => { 
    let usu = elSistema.darUsuario(4);
    let apu = elSistema.crearApuesta(uru, brasil, usu, 700);
    expect(apu.equipo1).toBe(uru);
    expect(apu.equipo2).toBe(bra);
    expect(apu.fecha2).toBe(hoy);
    expect(apu.usuario).toBe(usu);
    expect(apu.monto).toBe(700);
});

test('Registrar una apuesta en el sistema', () => { 
    elSistema.registrarApuesta(losPibes, unaApuesta);
    expect(losPibes.getListaApuestas()).toStrictEqual([unaApuesta]);
});

test('Agregar usuarios al grupo', () => {
    let usu = elSistema.darUsuario(4);
    elSistema.agregarUsuariosAlGrupo(usu, losPibes);
    expect(losPibes.listaIntegrantes.length).toBe(2);
});

test('Validar que haya texto', () => {
    let v1 = elSistema.validarCampo("hola");
    expect(v1).toBe(true);

    let v2 = elSistema.validarCampo("  hola  ");
    expect(v2).toBe(true);

    let v3 = elSistema.validarCampo("   ");
    expect(v3).toBe(false);
});

test('Validar el numero', () => {
    let v1 = elSistema.validarNumero("1");
    expect(v1).toBe(true);

    let v2 = elSistema.validarNumero("10");
    expect(v2).toBe(false);

    let v3 = elSistema.validarNumero("6");
    expect(v3).toBe(true);

    let v4 = elSistema.validarNumero("0");
    expect(v4).toBe(false);
});

test('Agregar equipo al sistema', () => {
    elSistema.agregarEquipo(ePrueba);
    expect(elSistema.listaEquipos.length).toBe(33);
});

test('Agregar integrante al sistema', () => {
    elSistema.agregarPosibleIntegrante(unUsuario);
    expect(elSistema.posiblesIntegrantes.length).toBe(1);
});

test('Resetear lista de posibles integrantes del sistema', () => {
    elSistema.resetPosiblesIntegrantes();
    expect(elSistema.posiblesIntegrantes).toStrictEqual([]);
});
