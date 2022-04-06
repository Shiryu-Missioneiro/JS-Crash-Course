const { text } = require("express");

// For. Precisa de 3 parâmetros. Qualquer variaável passara pelo Loop até a condição ser alcançada.
for(let i = 0; i <= 3; i++){
    console.log(`For Loop Number: ${i}`);
}
// While. A variável é colocada fora do Loop.
let n = 1;
while(n <= 3) {
    console.log(`While Loop Number: ${n}`);
    n++;
}
//____________________
// Loops através de um Array
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
for(let i = 0; i < tarefas.length; i++){
    console.log(tarefas[i].text);
}
// Melhor forma para navegar entre Arrays.
for(let T of tarefas) {
    console.log(T.id);
}