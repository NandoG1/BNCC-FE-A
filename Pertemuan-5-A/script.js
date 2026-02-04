

// // Javascript array

// let fruits = ["Apple", "Banana", "Orange"];

// // Array Method

// // 1. .length

// console.log(fruits.length);

// // 2. toString()

// console.log(fruits.toString());

// // 3. .join()

// console.log(fruits.join(" - "));

// // 4. Akses elemenet

// console.log(fruits.at(0));
// console.log(fruits[0])

// console.log(fruits.at(-1))

// // 5. .pop()

// fruits.pop()
// console.log(fruits)

// // 6. push()
// fruits.push("Mango");
// console.log(fruits)

// // 7. Includes()
// console.log(fruits.includes("Strawberry"));

// // 8. reverse()
// fruits.reverse()
// console.log(fruits)


// // Javascript object (key:value)

// let student = {
//     name: "John",
//     age: 20,
//     major: "Computer Science"
// }

// console.log(student.name)

// // DOM Manipulation

// document.getElementById("paragraph-1").innerHTML = "Hello, John";

// // Event

// function sayHello(){
//     alert("Button Click");
// }


let counter = 0;

function increase(){
    counter++; // Ini buat tambahin counternya
    document.getElementById("counter").innerHTML = counter; // Ini buat ngeoutput counter di UI
}

function decrease(){
    counter--; // Ini buat ngurangin counternya
    document.getElementById("counter").innerHTML = counter;
}

function reset(){
    // set counter jadi 0
    counter = 0

    // baru kita output counter di UI
    document.getElementById("counter").innerHTML = counter;
}









function countChar(){
    // isinya adalah logic dari hitungin jumlah karakter di input terus outputin di website

    // Kita ambil dulu value dari inputannya biar kita bisa itung jumlah karakternya
    let text = document.getElementById("textInput").value

    // Kalau udah baru kita itung jumlah karakternya pake .length
    let jumlah_karakter = text.length

    // Baru kita outputin hasilnya ke website
    document.getElementById("result").innerHTML = "Jumlah Karakter: " + jumlah_karakter 

}






function toggleText(){
    // select tagnya dulu di javascript
    // tujuannya biar kita bisa ngilagin/munculin teks di tagnya

    let teks = document.getElementById("info")

    // kita cek si teksnya ini itu kondisinya hide atau show

    if(teks.style.display === "none"){ // hide
        teks.style.display = "block" // ke show
    }
    else{ // show
        teks.style.display = "none"; // ke hide
    }

}