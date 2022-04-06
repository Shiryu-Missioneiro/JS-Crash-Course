// Array é um variável que possui multiplos valores.

const fruits = ['apples', 'oranges', 'pears'];
// Acessando um único vavlor no array.
console.log(fruits[1]);
// Adicionando um item.
fruits[3] = 'grapes';
    console.log(fruits);
// Melhor jeito de adicionar itens ao final do Array
fruits.push('mangos');
    console.log(fruits);
// Adicionando itens no início
fruits.unshift('straweberries');
    console.log(fruits);
// Retirando um item do final
fruits.pop();
    console.log(fruits);
// Checando se existe algo no Array.
console.log(Array.isArray(fruits));
// Buscando o Index de um valor.
console.log(fruits.indexOf('pears'));

//___________________________________________________//
// Arrays de Objetos
const tarefas = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];
// Acessando um objeto específico
console.log(tarefas[1].text);

// High Order Array Methods.
// The Best of the Best

// forEach -> Pula entre objetos do Array.
tarefas.forEach(function(trf) {
    console.log(trf.text);
});
// Map retorna um Array novo.
const mId = tarefas.map(function(m) {
    return m.id;
});
console.log(mId);
// Filter -> Retorna apenas as variáveis com uma condição específica.
const TCompleted = tarefas.filter(function(T) {
    return T.isCompleted == true; // Até aqui a função puxa todas as infos do Array con a Boolean True
}).map(function(T) { // Adicionando Map, o Array é atualizado para puxar apenas os Text dos Objetos True
    return T.text;
})
console.log(TCompleted);