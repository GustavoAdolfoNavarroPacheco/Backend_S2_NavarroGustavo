`
Herencia
Es cuando una clase (hija) puede reutilizar atributos y métodos de otra clase (padre), evitando reescribir código.

`

class Animal {
    constructor(nombre) {
    this.nombre = nombre;
    }

    mover() {
    console.log(`${this.nombre} se esta moviendo`);
    }
}

class Perro extends Animal {
    ladrar() {
    console.log(`${this.nombre} dice: Guau`);
    }
}

const miPerro = new Perro("Snoopy");

miPerro.mover();  
miPerro.ladrar(); 
