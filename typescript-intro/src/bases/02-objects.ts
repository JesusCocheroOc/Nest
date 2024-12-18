export const pokemonIds = [1,23,30,42,23]

//- en js esta permitido agregar otro tipo de datos, no en typescript, pero como solo es un super set termina siendo js
pokemonIds.push('asdfsdfa')


/// Agregar validaciones a el objeto, ose que luzca de cierta manera con una interfaz 

interface Pokemon {
    name: string,
    type: string,
    attack: number,
    defense?: number, // este valor puede ser nulo por el ?
    id: number | undefined, // este valor tiene que estar aunque sea nulo
}

//- si no se cumple la interfaz, typescript arroja un error hay que ponerlo de tipo Pokemon
export const pikachu: Pokemon = {
    name: 'pikachu',
    type: 'electric',
    attack: 45,
    defense: 49,
    id: 23,
};

//- Asi definimos el tipo de el array
export const pokemons:Pokemon[] = [];

pokemons.push(pikachu);