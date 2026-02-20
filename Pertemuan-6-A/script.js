// JavaScript Date

// 1. ISO Date -> Date dengan format internasional

let ISODate = new Date("2026-02-04T16:01:06.047Z")
console.log(ISODate)


// 2. Short Date -> Date dengan format MM/DD/YYYY

let shortDate = new Date("02/04/2026")
console.log(shortDate)

// 3. Long Date -> Date dengan format Month Date, Year

let longDate = new Date("February 4, 2026")
console.log(longDate)

// GET Method di Date

let now = new Date();

let year = now.getFullYear()
console.log(year)

let month = now.getMonth() // Dia dimulai dari angka 0 sampe 11
console.log(month)

let day = now.getDay() // Dia dimulai dari angka 0 sampe 6
console.log(day) 

let hours = now.getHours()

let minute = now.getMinutes()

let seconds = now.getSeconds()

console.log(hours)
console.log(minute)
console.log(seconds)

// SET Method di date

let date = new Date()

date.setFullYear(2030)
date.setMonth(5)
date.setDate(10)

console.log(date)


// Spread dan Rest Operator (...)

// 1. Spread Operator
let a = [1,2,3]
let b = [...a];

console.log(b)

let obj1 = {
    name: "John"
}

let obj2 = {
    ...obj1,
    age: 20
}

console.log(obj2)

// 2. Rest Operator

function showNumbers(...numbers){
    console.log(numbers)
}

showNumbers(1,2,3,4,5)

// Array Method

let nums = [1,2,3,4,5]

// .map()
let multiplyBy2 = nums.map(n => n * 2);
console.log(multiplyBy2)

// .filter()
let array = nums.filter(n => n > 3);
console.log(array)

// .find()
console.log(nums.find(n => n === 6));


// Exception Handling (try-catch-finally)

try{
    let test = JSON.parse("Invalid JSON");
    console.log(test)
}
catch (error){
    console.log("Program ada error");
}
finally{
    console.log("Selesai");
}


// Cara 1
// ASYNC dan AWAIT

// Link API: https://jsonplaceholder.typicode.com/users

async function getUsers(){
    try{
        // kita perlu waktu buat ngambil data dari API
        let response = await fetch("https://jsonplaceholder.typicode.com/users"); // ini perlu waktu
        let data = await response.json(); // ini perlu waktu
        console.log(data);
    }
    catch(error){
        console.log("Ada error. Silahkan coba lagi");
    }
}

getUsers()

// Cara 2
// Fetch dan then

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log("Ada Error. Silahkan coba lagi"));

