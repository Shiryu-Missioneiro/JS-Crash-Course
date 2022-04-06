const person = {
    firstName: 'Will',
    lastName: 'Levinski',
    age: 34,
    hobbies: ['music', 'basket', 'movies'],
    address: {
        street: 'Falcão, 205',
        city: 'Arapongas',
        state: 'PR'
    }
}
// Acessando os valores
console.log(person);
// Acessando um valor específico.
console.log(person.firstName);
// Acessando mais de um valor.
console.log(person.lastName, person.age);
// Acessando um valor dentro de um Array.
console.log(person.hobbies[1]);
// Acessando um valor dentro de um Objeto.
console.log(person.address.city);

// Criando variáveis. Tirando do Objeto.
const { firstName, age, address: {state}} = person;
    console.log(state);

// Adicionando Propriedades.
person.email = 'will@gmail.com';
    console.log(person);