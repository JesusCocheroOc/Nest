export let name:string | Number = 'Jesus Cochero';/// Aca puede ser string o numérica
export const age = 35;
export const isValid: boolean = true;


/// En el from se va a ver esto porque el archivo se ejecuta y lo que consume el export es esto
name = 'John Carreto'


//! Error, no detiene el proyecto pero si marca error
//name = true


export const templateString = ` Esto es un string 
multilines

"" ''

inyectar valores ${age}

`

console.log(templateString)