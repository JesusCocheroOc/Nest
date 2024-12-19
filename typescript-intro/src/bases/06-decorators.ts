
/// El objetivo es que yo pueda decir que este método esta  obsoleto por ejemplo digamos en en otras releases lo van a borrar
const Deprecated = (deprecationReason: string) => {
    return (
        target: any,
        memberName: string,
        propertyDescriptor: PropertyDescriptor
    ) => {
        // console.log({target})
        return {
            get() {
                const wrapperFn = (...args: any[]) => {
                    console.warn(
                        `Method ${memberName} is deprecated with reason: ${deprecationReason}`
                    );
                    //! Llamar la función propiamente con sus argumentos
                    propertyDescriptor.value.apply(this, args);
                };
                return wrapperFn;
            },
        };
    };
};

class Pokemon {
    constructor(public id: number, public name: string) {}

    scream() {
        console.log(`${this.name} roar!`);
    }

    @Deprecated('Most use speak2 method instead') // Osea le dice que tiene que hacer
    speak() {
        console.log(`${this.name}, ${this.name}!`);
    }

    speak2() {
        console.log(`${this.name}, ${this.name}!!!`);
    }
}

export const pikachu = new Pokemon(25, 'Pikachu');
pikachu.scream();

pikachu.speak();
