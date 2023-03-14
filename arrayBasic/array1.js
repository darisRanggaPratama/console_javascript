// 1. Buat array dengan tipe data numerik berkapasitas 11 elemen yang diisi nilai random berkisar antara 0 sampai dengan 21 dimana menolak elemen yang bernilai ganda, lalu tampilkan hasilnya.

// Membuat array kosong dengan kapasitas 11
var arr = new Array(11);

// Membuat fungsi untuk menghasilkan angka acak antara 0 dan 21
function randomNum() {
  return Math.floor(Math.random() * 22);
}

// Membuat fungsi untuk mengecek apakah suatu angka sudah ada di dalam array
function isDuplicate(num, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == num) {
      return true;
    }  
  }
  return false;
}

// Mengisi array dengan angka acak yang tidak ganda
var index = 0;
while (index < arr.length) {
  var num = randomNum();
  if (!isDuplicate(num, arr)) {
    arr[index] = num;
    index++;
  }
}

// Menampilkan array
console.log("Array: " + arr);

// 2. Ambil elemen yang bernilai genap lalu tampilkan secara ascending.

// Membuat array baru untuk menyimpan elemen genap
var even = [];

// Mengambil elemen genap dari array dan memasukkannya ke array baru
for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    even.push(arr[i]);
  }
}

// Mengurutkan array baru secara ascending menggunakan metode sort
even.sort(function(a, b) {
  return a - b;
});

// Menampilkan array baru
console.log("Elemen genap: " + even);

// 3. Ambil elemen yang bernilai ganjil lalu tampilkan secara descending.

// Membuat array baru untuk menyimpan elemen ganjil
var odd = [];

// Mengambil elemen ganjil dari array dan memasukkannya ke array baru
for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 != 0) {
    odd.push(arr[i]);
  }
}

// Mengurutkan array baru secara descending menggunakan metode sort
odd.sort(function(a, b) {
  return b - a;
});

// Menampilkan array baru
console.log("Elemen ganjil: " + odd);




/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */


