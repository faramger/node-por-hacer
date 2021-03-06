//const argv = require('yargs').argv;
//const { argv } = require('./config/yargs');
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
let comando = argv._[0];



switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('========Por Hacer======='.green);
            console.log(tarea.descripcion);
            console.log(colors.red('Estado:'), tarea.completado);
            console.log('========Por Hacer======='.green);
        }
        break;
    case 'actualizar':
        let accion = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(accion);
        break;
    default:
        let eliminar = porHacer.borrar(argv.descripcion);
        console.log(eliminar);
        break;
}