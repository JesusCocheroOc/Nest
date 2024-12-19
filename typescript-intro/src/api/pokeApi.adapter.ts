import axios from 'axios';

/// Definimos un modulo que se encarga de gestionar las solicitudes a la api
export class PokeApiAdapter {
    private readonly axios = axios;


    //- solo implementamos el que vamos a user, los demás son de ejemplo
    async get(url: string) {
        const { data } = await this.axios.get(url);
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

