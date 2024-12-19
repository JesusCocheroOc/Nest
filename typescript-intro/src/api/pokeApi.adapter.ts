import axios from 'axios';

///1) Aca definimos los métodos y propiedades que debe tener la clase no me interesa com llegas del punto a al punto b
export interface HttpAdaptar {
    // es como ponerme reglas, entonces get recibe un genérico y es una promesa que retorna un genérico
    get<T>(url: string): Promise<T>;
}

//!2) LISTO, si no tiene el método get te marca error
export class PokeApiAdapter implements HttpAdaptar {
    private readonly axios = axios;


    // Es un estándar poner T como el primer genérico o algo asi, y ya asi podemos pasarle interfaces a el retorno cuando usemos el método
    async get<T>(url: string) {

        //-Aca decimos que la data es de tipo T
        const { data } = await this.axios.get<T>(url);
        return data;
    }

    async post(url: string, data: any) {
        return;
    }

    async patch(url: string, data: any) {
        return;
    }

    async delete(url: string) {
        return;
    }
}

export class PokeApiFetchAdapter implements HttpAdaptar {
    async get<T>(url: string): Promise<T> {
        const resp = await fetch(url);

        const data : T = await resp.json();

        return data;
    }
}
