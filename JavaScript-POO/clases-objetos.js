class Persona {
    
    otro;
    
    constructor(nombre, edad){
            this.nombre = nombre;
            this.edad = edad;
    }

    imprimir(){
        console.log(this.nombre, this.edad);
    }
}

const p1 = new Persona('Kai', 21)
const p2 = new Persona('Cecilia', 21)

console.log(p1)
p1.imprimir()
p2.imprimir()