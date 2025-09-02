/*

-- POLIMORFISMO --

Permite que un mismo metodo se comporte de manera d-
istinta segun el objeto que lo use.
y exponer solo lo necesario.
En JavaScript se logra con mediante

*/


class Animal {
    constructor (nombre) {
        this.nombre = nombre;
    }

    hacerSonido ( ) {
        prompt(`${this.nombre} hace un sonido`)
    }
}

class Perro extends Animal {
    constructor (ladra) {
        super(ladra);
    }

    hacerSonido ( ) {
        prompt(`${this.nombre}, el cual es un perro, ladra!`)
    }
}

class Gato extends Animal {
    constructor (nombre) {
        super(nombre);
        this.ronronea = true;
    }

    hacerSonido ( ) {
        prompt(`${this.nombre}, el cual es un gato, maulla!`)
        prompt(`El gato ronronea? = ${this.ronronea}`)
    }
}

const perro1 = new Perro("Paco");
perro1.hacerSonido();

const gato1 = new Gato("Simona");
gato1.hacerSonido();