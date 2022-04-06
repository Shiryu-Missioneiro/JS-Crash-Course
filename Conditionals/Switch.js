const x = 11

const color = x > 10 ? 'Red' : 'Blue';

switch(color){
    case 'Red':
        console.log('Color is Red');
        break;
    case 'Blue':
        console.log('Color is Blue');
        break;
    default:
        console.log('Color is NOT Red OR Blue');
        break;
}