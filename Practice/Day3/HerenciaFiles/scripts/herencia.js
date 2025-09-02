/*

-- HERENCIA --

Permite reutilizar codigo creado clases hijas a par-
tir de una clase padre.
En JavaScript se logra mediante extends.

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
    constructor (nombre) {
        super(nombre);
    }
}

const perro1 = new Perro("Paco");
perro1.hacerSonido();