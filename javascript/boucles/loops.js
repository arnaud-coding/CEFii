// Run with quokka

// the 3 arrays to loop
const names = ["bob", "bill", "jack", "jenny"]
const scores = [12, 58.5, 66]
const students = [
    { name: "Arnaud", mean: 15, gender: "m", location: 'on-site' },
    { name: "Amanda", mean: 16, gender: "f", location: 'on-site' },
    { name: "Johnny", mean: 9, gender: "x", location: 'remote' }
]

// ----------------
// loops Array.prototype.forEach
// ----------------
names.forEach((name, index, array) => { // index,array: optionals properties
    index
    name
    array
})
names.forEach((name) => { name })

scores.forEach((score) => { score })
scores

students.forEach((student) => {
    student

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    const { name, mean, ...rest } = student
    name
    mean
    rest
    console.log(`${name} mean is ${mean}`);

    student.name = student.name.toUpperCase()
})

// ----------------
// loops for(,,)
// ----------------
let l = names.length
for (let index = 0; index < l; index++) {
    const name = names[index]
    name
}

for (let index = 0; index < scores.length; index++) {
    const element = scores[index];
    element
}

for (let index = 0; index < students.length; index++) {
    const student = students[index]; student
    student
}

// ----------------
// loops for...of
// ----------------
for (const student of students) {
    student
}

// ----------------
// loops for...in
// ----------------
for (const index in names) {
    index
    const name = names[index]
    name
}

for (const index in students) {
    index
    const student = students[index]
    student
}

const arno = students[0]
for (const key in arno) {
    if (Object.prototype.hasOwnProperty.call(arno, key)) {
        key
        const element = arno[key];
        element
    }
}

// ----------------
// loops do...while
// ----------------
let index = 0

do {
    index
    index++
} while (index < 5);

index = 0
do {
    index
} while (++index < 5);

index = 0
do {
    index
} while (index++ < 5);

// vielle facon de rechercher avec do...while ; pas cool !!!!
index = 0
do {
    const student = students[index]
    if (student.mean < 5) {
        student
        break
    }
    index++
} while (index < students.length);

// new way : more simple
const s = students.find(student => student.mean < 5)
s


for (let index = 1; index <= 100; index++) {
    const mod = index % 5
    const s = `${index} modulo 5 = ${mod}`
    s
    mod
}