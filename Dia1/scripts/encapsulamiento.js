`
Encapsulamiento
El encapsulamiento consiste en proteger los datos internos de un objeto para que no se accedan directamente, sino mediante getters y setters.

`
class Persona {
    #nombre;

    constructor(nombre) {
    this.#nombre = nombre; 
    }

    getNombre() {
    return this.#nombre;
    }

    setNombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
    }
}

const persona = new Persona("Pedro");

console.log(persona.getNombre()); 
persona.setNombre("Yamith");
console.log(persona.getNombre()); 

// console.log(persona.#nombre); 