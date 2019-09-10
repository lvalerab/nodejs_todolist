const fs=require('fs');
const moment=require('moment');

let listaTareas=[];

const guardarDB=(ruta='./db/data.json') => {
    let data=JSON.stringify(listaTareas);
    
    return new Promise((resolve,reject)=> {
        fs.writeFile('./db/data.json',data,(error)=> {
            if(error) {
                reject(error);
            } else {
                resolve(true);
            }
        });
    });
};

const leerDB=(ruta='./db/data.json')=> {
    return new Promise((resolve,reject)=>{
        fs.readFile(ruta,(err,data)=> {
            if(err) {
                reject(err);
            } else {
                try {
                    if(data!="")
                        listaTareas=JSON.parse(data);
                    else
                        listaTareas=[];
                    resolve(listaTareas);
                }
                catch (e) {
                    reject('Error al leer las tareas del fichero, causa: '+e.message);
                }
            }
        });
    });
}

const crear=(descripcion)=> {
    listaTareas.push(
    {
        id:listaTareas.length,
        descripcion,
        completado:false,
        hora:moment(),
        terminado:null
    });
    return listaTareas[listaTareas.length-1];
}

const separadores=(cols=80,separadorCab="=",separadorLin='-') => {
    let spCab="";
    let spLin=""
    for(let p=0;p<cols;p++) {
        spCab+=separadorCab;
        spLin+=separadorLin;
    }
    return {
        spCab,
        spLin
    }
}

const listar=()=> {
    let sep=separadores();
    console.log(sep.spCab.green);
    console.log("Listado de tareas".green);
    console.log(sep.spLin.green);
    if(listaTareas.length>0) {
        console.log("ID\tfecha\t\tTerminado\tDescripcion");
        for(let i=0;i<listaTareas.length;i++) {
            let linea=`${listaTareas[i].id}\t${moment(listaTareas[i].hora).format("DD/MM/YY HH:mm")}\t${listaTareas[i].terminado?"S":"N"}\t\t${listaTareas[i].descripcion}`;
            console.log(i%2==0?linea.white:linea.yellow);
        }
    } else {
        console.log(sep.spCab.red);
        console.log("No existen tareas".red);
        console.log(sep.spCab.red);
    }
}

const mostrar=(indice)=> {
    let sep=separadores();
    if(indice>=0 && indice<listaTareas.length) {
        let nt=listaTareas[i];
        console.log(sep.spCab.green);
        console.log(`| ID: ${nt.id}\t|Fecha: ${moment(listaTareas[i].hora).format("DD/MM/YY")}\t|Hora: ${moment(listaTareas[i].hora).format("HH:mm")}\t`.yellow);
        console.log(sep.spLin.green);
        console.log(`| Completada: ${nt.completado?"Si":"No"}\t`.yellow);
        console.log(sep.spLin.green);
        console.log(`Descripcion:`.green);
        console.log(nt.descripcion.yellow);
        console.log(sep.spCab.green);
    } else {
        console.log(sep.spCab.red);
        console.log(`El indice ${indice} no se encuentra en las notas guardadas`);
        console.log(sep.spCab.red);
    }
}


module.exports={
    crear,
    listar,
    mostrar,
    leerDB,
    guardarDB
}