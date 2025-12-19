// 1. Output

console.log("Hello World!")

// 2. Tipe Data

// Number
let x = 10
let y = 5
console.log(x, y)

// Decimal
let tinggi = 170.5
console.log(tinggi)

// String
let nama = "John Doe"
let jurusan = "CS"

console.log("Nama: ", nama)
console.log("Jurusan: ", jurusan)

// Boolean
let isStudent = false

console.log(isStudent)

// Null
let data = null
console.log(data)

// Undefined
let score
console.log(score)


// 3. Variable Declaration

// - Let
let angka = 10
console.log(angka)


// - Var
var angka2 = 100
console.log(angka2)

if (true){
    // var a = 0.5
}

// console.log(a)


// - Const

const phi = 3.14

// phi = 5

console.log(phi)


// 4. Operators

// - Aritmetic Operators
let a = 5
let b = 3

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

// Comparision Operators

console.log("COMPARISION")

console.log(a === b) // (sama dengannya tiga kali)
console.log(a > b) // true
console.log(a <= b)

// Ternary Operators

console.log("TERNARY")

let umur = 25

let status = umur > 18 ? "Dewasa" : "Anak-anak"

console.log(status)

// 5. Selection (Percabangan) (if)

console.log("SELECTION")

let nilai = 50

if (nilai > 75){
    console.log("Lulus");
}
else{
    console.log("Tidak Lulus")
}

let score_2 = 50

if (score_2 > 90){
    console.log("A")
}
else if(score_2 > 80){
    console.log("B")
}
else if(score_2 > 70){
    console.log("C")
}
else{
    console.log("D")
}

// 6. Looping (Pengulangan)

console.log("LOOPING")

// - for

for(let i = 0;i<5;i++){
    console.log(i)
}

// while

console.log("WHILE")

let i = 1

while(i < 3){
    console.log(i)
    i++;
}


// 7. Function

function greet(name){
    console.log("Hello", name);
}

greet("John")
greet("Doe")
greet("Andi")
greet("John 2")
greet("Andi 2")

// Return value

function add(a, b){
    return 10;
}

let result = add(1,11);
console.log(result)

