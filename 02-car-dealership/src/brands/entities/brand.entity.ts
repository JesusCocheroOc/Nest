///1) No se llama BrandEntity por de mas de que como esto se conecta con ORM, esta es de las pocas clases que no tiene la extension
export class Brand {
  id: string;
  name: string;
  createdAt: number;
  updateAt?: number;
}
