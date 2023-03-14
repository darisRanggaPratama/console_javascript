// Membuat array numerik dengan kapasitas 11 elemen
const arr = new Array(11);

// Mengisi array dengan nilai random berkisar antara 0-21
for (let i = 0; i < arr.length; i++) {
  let randomNumber = Math.floor(Math.random() * 22);
  
  // Memastikan elemen tidak berisi nilai ganda
  while (arr.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * 22);
  }
  
  arr[i] = randomNumber;
}

// Menampilkan hasil array
console.log("Array awal: ", arr);

// Mengambil elemen genap dan menyortir secara ascending
const evenNumbers = arr.filter(num => num % 2 === 0).sort((a, b) => a - b);

// Menampilkan elemen genap yang sudah disortir
console.log("Elemen genap secara ascending: ", evenNumbers);

// Mengambil elemen ganjil dan menyortir secara descending
const oddNumbers = arr.filter(num => num % 2 !== 0).sort((a, b) => b - a);

// Menampilkan elemen ganjil yang sudah disortir
console.log("Elemen ganjil secara descending: ", oddNumbers);



/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


