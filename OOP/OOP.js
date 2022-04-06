class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = (age);
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getNameAge() {
        return `${this.firstName} ${this.age}`;
    }
}

// Objeto Instanciado
const person1 = new Person('Will', 'Levinski', '34');
const person2 = new Person('Valéria', 'Pereira', '33');
const person3 = new Person('Vithor', 'Augusto', '11');

console.log(person2.getFullName());
console.log(person1);
console.log(person3.getNameAge());