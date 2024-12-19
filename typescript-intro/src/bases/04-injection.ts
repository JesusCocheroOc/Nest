
import { HttpAdaptar, PokeApiAdapter, PokeApiFetchAdapter } from '../api/pokeApi.adapter';
import {
    Move,
    PokeapiResponse,
} from '../interfaces/pokeapi-response.interface';

export class Pokemon {
    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    constructor(
        public readonly id: number,
        public name: string,
        private readonly http: HttpAdaptar ///3) Ponemos una interfaz en ves de una clase
    )

    {}

    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    speak() {
        console.log(`${this.name}, ${this.name}`);
    }

    async getMoves(): Promise<Move[]> {

        /// Ya pide la interfaz de el objeto
        const data =  await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves);

        return data.moves;
    }
}

const pokeApiFetch = new PokeApiFetchAdapter();
const pokeApiAxios = new PokeApiAdapter();
//- Marca error en el siguiente ejercicio lo resolvemos
export const charmander = new Pokemon(4, 'Charmander', pokeApiFetch);

charmander.getMoves();
