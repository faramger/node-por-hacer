const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de tarea por hacer'
}
const completado = {
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('listar', 'Comando Listar', { descripcion })
    .command('crear', 'Comando Crear', { descripcion, completado })
    .command('actualizar', 'Comando Actualizar', { descripcion, completado })
    .command('borrar', 'Comando Borrar', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}