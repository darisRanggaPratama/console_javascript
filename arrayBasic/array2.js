// 1. Buat array dengan tipe data numerik berkapasitas 11 elemen yang diisi nilai random berkisar antara 0 sampai dengan 21 dimana menolak elemen yang bernilai ganda, lalu tampilkan hasilnya.

// Membuat array kosong dengan kapasitas 11
let arr = new Array(11);

// Membuat fungsi untuk menghasilkan angka acak antara 0 dan 21
function randomNum() {
  return Math.floor(Math.random() * 22);
}

// Membuat fungsi untuk mengecek apakah suatu angka sudah ada di dalam array
function isDuplicate(num, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == num) {
      return true;
    }
  }
  return false;
}

// Mengisi array dengan angka acak yang tidak ganda
let index = 0;
while (index < arr.length) {
  let num = randomNum();
  if (!isDuplicate(num, arr)) {
    arr[index] = num;
    index++;
  }
}

// Menampilkan array
console.log("Array: " + arr);

// 2. Sisipkan 1 elemen bernilai 100 antara index 4 dan index 5 lalu tampilkan hasilnya.

// Membuat fungsi untuk menyisipkan elemen ke dalam array pada posisi tertentu
function insertElement(array, position, element) {
  // Menggeser elemen setelah posisi ke kanan
  for (let i = array.length - 1; i > position; i--) {
    array[i] = array[i - 1];
  }
  // Menyisipkan elemen ke posisi
  array[position] = element;
}

// Menyisipkan elemen bernilai 100 antara index ke-4 dan ke-5
insertElement(arr, 5, 100);

// Menampilkan array
console.log("Array setelah menyisipkan: " + arr);

// 3. Ubah index ke 3 dengan nilai 99 lalu tampilkan hasilnya.

// Mengubah elemen pada index ke-3 dengan nilai 99
arr[3] = 99;

// Menampilkan array
console.log("Array setelah mengubah: " + arr);

// 4. Tampilkan semua elemen array dengan mengurutkan nilainya secara descending.

// Membuat array baru untuk menyimpan elemen yang sudah diurutkan secara descending
let desc = [];

// Menyalin elemen dari array ke array baru
for (let i = 0; i < arr.length; i++) {
  desc[i] = arr[i];
}

// Mengurutkan array baru secara descending menggunakan metode sort
desc.sort(function(a, b) {
  return b - a;
});

// Menampilkan array baru
console.log("Array diurutkan secara descending: " + desc);

// 5. Hapus index ke 2 lalu tampilkan hasilnya.

// Membuat fungsi untuk menghapus elemen dari array pada posisi tertentu
function deleteElement(array, position) {
  // Menggeser elemen setelah posisi ke kiri
  for (let i = position; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }
}

// Menghapus elemen pada index ke-2
deleteElement(arr, 2);

// Menampilkan array
console.log("Array setelah menghapus: " + arr);

//6. Tampilkan semua elemen array dengan mengurutkan nilainya secara ascending.

// Membuat array baru untuk menyimpan elemen yang sudah diurutkan secara ascending
let asc = [];

// Menyalin elemen dari array ke array baru
for (let i = 0; i < arr.length; i++) {
  asc[i] = arr[i];
}

// Mengurutkan array baru secara ascending menggunakan metode sort
asc.sort(function(a, b) {
  return a - b;
});

// Menampilkan array baru
console.log("Array diurutkan secara ascending: " + asc);



/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


