const cursos = [
    {
        id: 1,
        nombre: 'Bases de datos',
        duracion: '34 horas',
        valor: '300000'  
    },
    {
        id: 2,
        nombre: 'Estructuras de datos',
        duracion: '40 horas',
        valor: '350000'
    },
    {
        id: 3,
        nombre: 'Algoritmos',
        duracion: '30 horas',
        valor: '200000'
    }
];

const opciones={

    id:{
        demand:true,
        alias: 'i'
    },
    nombre:{
        demand:true,
        alias: 'n'
    },
    cedula:{
        demand:true,
        alias: 'c'
    }
}

module.exports={
    cursos,
    opciones
};