const color=require('colors');

const argv =require('./config/yargs').argv; //Configuracion de lectura de linea de comandos
const todo=require('./todo/to-do');


let comando=argv._[0];

todo.leerDB().then((data)=> {
    switch(comando) {
        case "crear":
            let tarea=todo.crear(argv.descripcion);
            todo.mostrar();
            break;
        case "listar":
            todo.listar();
            break;
        case "mostrar":
            todo.mostrar(argv.elemento);
            break;
        case "eliminar":
            todo.eliminar(argv.elemento);
            break;
        case "actualizar":
            todo.actualizar(argv.elemento,argv.descripcion,argv.completado);
            break;
        default:
                console.log("comando no reconocido");
            break;
    };
    todo.guardarDB().then((correcto)=> {
        console.log("Datos guardados".green);
    }).catch(err=> {
        console.clear();
        console.log("Error al guardar los datos, causa: "+err.red)        
    });
}).catch(     
    err=>console.log('Error al leer los datos, '+err)
)

