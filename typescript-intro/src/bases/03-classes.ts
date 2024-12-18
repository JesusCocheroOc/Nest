/// Importar la librería
import axios from 'axios';  

export class Pokemon {
    get imageUrl() {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
    }

    constructor(public readonly id: number, public name: string) {}

    public scream() {
        console.log(`${this.name} screams!`);
        this.speak();
    }

    private speak() {
        console.log(`${this.name} speaks!`);
    }

    /// promesa, que consulta la información del pokemon
    async getMoves() {
        const {data} = await axios.get<string>('https://pokeapi.co/api/v2/pokemon/4');

        return data.moves
    }
}

export const charmander = new Pokemon( 4, 'Charmander') 

console.log(charmander.getMoves());