// Membuat array numerik dengan kapasitas 11 elemen
const numbers = new Array(11);

// Mengisi array dengan nilai random berkisar antara 0-21
for (let i = 0; i < numbers.length; i++) {
  let randomNumber = Math.floor(Math.random() * 22);
  
  // Memastikan elemen tidak berisi nilai ganda
  while (numbers.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * 22);
  }
  numbers[i] = randomNumber;
}

// Menampilkan hasil array
console.log("\n1. Array awal: ", numbers);

// Mengambil elemen genap dan menyortir secara ascending
const evenNumbers = numbers.filter(num => num % 2 === 0).sort((a, b) => a - b);

// Menampilkan elemen genap yang sudah disortir
console.log("\n2. Elemen genap secara ascending: ", evenNumbers);

// Mengambil elemen ganjil dan menyortir secara descending
const oddNumbers = numbers.filter(num => num % 2 !== 0).sort((a, b) => b - a);

// Menampilkan elemen ganjil yang sudah disortir
console.log("\n3. Elemen ganjil secara descending: ", oddNumbers);


// Sisipkan 1 elemen bernilai 100 antara index 4 dan index 5
numbers.splice(4, 0, 100);
console.log("\n4. Elemen array setelah sisip: ", numbers);

// Ubah index ke 3 dengan nilai 99
numbers[3] = 99;
console.log("\n5. Elemen array setelah diubah: ", numbers);

// Tampilkan semua elemen array dengan mengurutkan nilainya secara descending
let descendingOrder = numbers.slice().sort((a, b) => b - a);
console.log("\n6. Elemen array secara descending: ", descendingOrder);

// Hapus index ke 2
numbers.splice(2, 1);
console.log("\n7. Elemen array setelah dihapus: ", numbers);

// Tampilkan semua elemen array dengan mengurutkan nilainya secara ascending
let ascendingOrder = numbers.slice().sort((a, b) => a - b);
console.log("\n8. Elemen array secara ascending: ", ascendingOrder);

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
