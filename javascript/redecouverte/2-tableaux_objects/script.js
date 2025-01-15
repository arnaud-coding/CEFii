// ---------------------
// Arrays and array of object
// ---------------------
const fruits = ['apple', 'banana', 'kiwi', 'mango', 'orange'];
console.log(fruits);
console.log(fruits[2]);
console.log(fruits.length);

fruits.push('rapsberry');
fruits.unshift("cherry"); // ajouter au début du tableau
console.log(fruits);
fruits.splice(2, 1); // supprime élément à partir d'un index (1er parametre) et nombre d'éléments à supprimer (2e parametre)
console.log(fruits);
fruits.pop(); // supprime dernier élement
console.log(fruits);

const students = [
    { firstname: 'Bob', lastname: 'Fisher', age: 20, male: true },
    { firstname: 'Samuel', lastname: 'Bernard', age: 25, male: true },
    { firstname: 'Lisa', lastname: 'Bannow', age: 35, male: false },
    { firstname: 'Josh', lastname: 'Butcher', age: 12, male: true }
]

console.log(students[0].firstname)

students.forEach((student, index) => {
    console.log(`student ${index} => firtname: ${student.firstname}, age: ${student.age}.`)
});

const studentsName = students.map(student => student.firstname); // Calls a defined callback function on each element of an array, and returns an array that contains the results.
console.log(studentsName);
