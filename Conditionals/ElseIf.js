const x = 2;
const y = 12

// A boolean permanece True com == pois ela reconhece apenas o valor da constante.
if(x == 10) {
    console.log('X is 10');
}
// A boolean é False com === pois agora ela reconhece '10' commo uma string além do valor.
if(x === 10) {
    console.log('X is 10');
}


if(x === 10) {
} else if(x > 10) {
    console.log('X is greater than 10');
} else {
    console.log('X is less than 10');
}

// Usando condicional OU 
if(x > 5 || y > 10) {
    console.log('X is more than 5 OR Y is more than 10');
}
// Usando condicional E
if(x > 5 && y > 10) {
    console.log('X is more than 5 AND Y is more than 10');
} else if(x < 5 && y > 10){
    console.log('X is less than 5 AND Y is more than 10');
} else {
    console.log('X is more than 5 AND Y is less than 10');
}