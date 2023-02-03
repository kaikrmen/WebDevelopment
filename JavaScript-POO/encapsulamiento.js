class Persona {
    #nombre
    #edad
    constructor(nombre, edad){
            this.#nombre = nombre;
            this.#edad = edad;
            this.#metodoPrivado()
    }

    set setNombre(nombre){
        this.#nombre = nombre
    }

    get getNombre(){
        return this.#nombre
    }

    set setEdad(edad){
        this.#edad = edad
    }

    get getEdad(){
        return this.#edad
    }

    #metodoPrivado(){
        console.log('Soy metodo privado')
    } 
}


const p1 = new Persona('Kai', 21)
console.log(p1.getNombre)
p1.setNombre = 'Leon'
console.log(p1.getNombre)
