/// Un decorador es una función especial que se aplica a clases, métodos, propiedades o parámetros.
/// En este caso, `MyDecorator` es un decorador de clase que tiene acceso a la definición de la clase como su argumento.
const MyDecorator = () => {
    // El decorador devuelve una función que recibe como argumento la clase (el "target").
    return (target: Function) => {
        console.log('Decorator executed'); // Se ejecuta cuando la clase es definida.
        console.log(target); // Aquí se puede observar la referencia a la clase decorada.

        // En este punto, se pueden realizar modificaciones en la clase, como agregar métodos o propiedades.
        // Si no se realiza ninguna modificación, el decorador solo registra información o realiza otras acciones.
    };
};

/// Aplicación del decorador a la clase `Pokemon`.
/// El decorador se ejecutará cuando la clase `Pokemon` sea definida.
/// En este ejemplo, `MyDecorator` no altera la clase, pero puede usarse para modificarla o extender su funcionalidad.
@MyDecorator()
class Pokemon {
    constructor(public id: number, public name: string) {}

    // Método que simula el grito de un Pokémon.
    scream() {
        console.log(`${this.name} roar!`);
    }

    // Método que simula al Pokémon hablando.
    speak() {
        console.log(`${this.name}, ${this.name}`);
    }
}

/// Exportación de una instancia de la clase `Pokemon`.
/// Esta instancia tiene las propiedades `id` y `name`, y puede ejecutar los métodos `scream` y `speak`.
export const pikachu = new Pokemon(25, 'Pikachu');

// Llamadas a los métodos de la instancia.
// `scream` imprime un mensaje simulando un grito.
pikachu.scream();

// `speak` imprime un mensaje simulando al Pokémon diciendo su nombre.
pikachu.speak();