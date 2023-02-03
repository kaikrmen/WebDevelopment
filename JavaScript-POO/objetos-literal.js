const persona = {
    nombre : 'Kai',
    apellido : 'Leon',
    edad : 21,

    nombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    },

    trajes : ['traje 01', 'traje 02', 'traje 03'],

    direccion : {
        codigo: 4005,
        calle: 7,
        ciudad: 'Maracaibo'
    }
}

console.log(persona)
console.log(persona.nombreCompleto())
console.log(persona.trajes)
console.log(persona.direccion.ciudad)