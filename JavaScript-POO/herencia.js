class Persona {
    constructor(nombre, edad){
            this.nombre = nombre;
            this.edad = edad;
    }

    detallePersona(){
        console.log(`Nombre: ${this.nombre} \n 
                     Edad: ${this.edad}`);
    }
}

class Empleado extends Persona{
    sueldo;
    constructor(nombre, edad, sueldo){
        super(nombre, edad)
        this.sueldo = this.sueldo
    }

    
    detallePersona(){
      super.detallePersona()
      console.log(`Sueldo:`, this.sueldo)
    }
}

const em1 = new Empleado('Leon', 21, 1000)
console.log(em1)

em1.detallePersona()