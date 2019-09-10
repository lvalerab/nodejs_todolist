/*Definimos las propiedades de los parametros */
const descripcion={
    demand:true,
    alias:'d',
    desc:'Descripcion de la tarea por hacer'
};

const elemento={
    demand:true,
    alias:'e',
    desc:'Indice del elemento a actualizar'
};

const completado= {
    default:true,
    alias:'c',
    desc:'Indica si la tarea esta completada o no'
};

const argv=require('yargs')
.command('crear', 'Crear un elemento',{
    descripcion //Ponemos los parametros en ecma 6 esto es equivalente a descripcion:descripcion
})
.command('actualizar','Actualiza el estado de completado a una tarea',{
    elemento ,
    descripcion,
    completado
})
.command('listar','Lista las tareas guardadas',{
    
})
.command('mostar','Muestra una entrad concreta',{
    elemento
})
.command('eliminar','Elimina una tarea',{
    elemento
})
.help()
.argv;

module.exports={
    argv
}