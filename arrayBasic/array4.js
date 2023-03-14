// 1. Buat array numerik berkapasitas 11 elemen dengan nilai random antara 0-21 tanpa nilai ganda
let numbers = [];
while (numbers.length < 11) {
  let randomNumber = Math.floor(Math.random() * 22);
  if (!numbers.includes(randomNumber)) {
    numbers.push(randomNumber);
  }
}
console.log("Elemen array: ", numbers);

// 2. Sisipkan 1 elemen bernilai 100 antara index 4 dan index 5
numbers.splice(4, 0, 100);
console.log("Elemen array setelah sisip: ", numbers);

// 3. Ubah index ke 3 dengan nilai 99
numbers[3] = 99;
console.log("Elemen array setelah diubah: ", numbers);

// 4. Tampilkan semua elemen array dengan mengurutkan nilainya secara descending
let descendingOrder = numbers.slice().sort((a, b) => b - a);
console.log("Elemen array secara descending: ", descendingOrder);

// 5. Hapus index ke 2
numbers.splice(2, 1);
console.log("Elemen array setelah dihapus: ", numbers);

// 6. Tampilkan semua elemen array dengan mengurutkan nilainya secara ascending
let ascendingOrder = numbers.slice().sort((a, b) => a - b);
console.log("Elemen array secara ascending: ", ascendingOrder);




/* 
for (let i = 0; i < arr.length; i++) {
  let randomNumber = Math.floor(Math.random() * 22);
  
  // Memastikan elemen tidak berisi nilai ganda
  while (arr.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * 22);
  }
  
  arr[i] = randomNumber;
}
Dalam loop tersebut, setiap elemen diisi dengan nilai random dengan menggunakan Math.floor(Math.random() * 22) dimana nilai random berkisar antara 0 sampai dengan 21. Selanjutnya, untuk memastikan tidak ada elemen yang bernilai ganda, dilakukan pengecekan dengan while (arr.includes(randomNumber)) dan jika nilai tersebut sudah ada di dalam array, maka akan di-generate kembali nilai random yang baru hingga ditemukan nilai yang belum ada di dalam array.
 */


