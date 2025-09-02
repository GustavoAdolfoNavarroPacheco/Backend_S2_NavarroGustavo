`
Polimorfismo
El polimorfismo significa que un mismo método puede tener diferente comportamiento dependiendo del objeto que lo implemente.

`



class Animal {
    sonido() {
    console.log("El animal hace un sonido");
    }
}

class Dog extends Animal {
    sonido() {
    console.log("El Dog esta ladrando!");
    }  
}

class Cat extends Animal {
    sonido() {
    console.log("El Cat esta maullando!");
    }
}

const animales = [new Animal(), new Dog(), new Cat()];

animales.forEach(a => a.sonido());
