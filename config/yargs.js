const argv=require('yargs')
.command('crear', 'Crear un elemento',{
    descripcion:{
        demand:true,
        alias:'d',
        desc:'Descripcion de la tarea por hacer'
    }
})
.command('actualizar','Actualiza el estado de completado a una tarea',{
    elemento: {
        demand:true,
        alias:'e',
        desc:'Indice del elemento a actualizar'
    },
    descripcion:{
        demand:true,
        alias:'d',
        desc:'Descripcion de la tarea por hacer'
    },
    completado:{
        default:true,
        alias:'c',
        desc:'Indica si la tarea esta completada o no'
    }
})
.command('listar','Lista las tareas guardadas',{
    
})
.command('mostar','Muestra una entrad concreta',{
    elemento: {
        demand:true,
        alias:'e',
        desc:'Indice del elemento a mostrar'
    }
})
.command('eliminar','Elimina una tarea',{
    elemento: {
        demand:true,
        alias:'e',
        desc:'Indice del elemento a actualizar'
    }
})
.help()
.argv;

module.exports={
    argv
}