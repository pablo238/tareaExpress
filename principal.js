const {cursos,opciones}=require('./datos.js');
var express = require('express')
var app = express()
app.listen(3000)


let imprimirCursos=(cursoss)=>{
     
    for (var i = 0; i < cursoss.length; i++) {
        
        let{id,nombre,duracion,valor}=cursoss[i]
        setTimeout(function(){
           console.log('El curso: '+nombre+' registrado con el id: '+id+' tiene una duracion de: '+duracion+' por un valor de: '+valor);
        },2000*(i+1))
    }
}

const argv= require('yargs')
            .command('inscribir', 'Inscripcion de curso',opciones)
            .argv;

let fs= require('fs');
let crearArchivo=(archivo)=>{
    let materia = cursos.find(function(idCurso){
        return idCurso.id==archivo.id
    })
    if(materia==null){
        console.log('Lo sentimos el id del curso ingresado no existe porfavor intente con alguno de los siguientes:')
        imprimirCursos(cursos);
        return false;
    }
    texto='El estudiante: '+ archivo.n + ' con cedula de ciudadania: ' + archivo.c + '\n'+
    'Se ha prematriculado en el curso: '+ materia.nombre + '\n'+
    'la cual tiene una duracion de: '+materia.duracion+' a un valor de: '+materia.valor

    app.get('/', function (req, res) {
        res.send(texto)
      })
          
}

if(argv._[0]=='inscribir'){
    crearArchivo(argv);
}else{
    imprimirCursos(cursos);
}
