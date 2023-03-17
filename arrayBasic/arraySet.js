// 1. Buat array dengan tipe data numerik berkapasitas 11 elemen yang diisi nilai random berkisar antara 0 sampai dengan 21 dimana menolak elemen yang bernilai ganda, lalu tampilkan hasilnya.

// Membuat array kosong dengan kapasitas 11 dan Set kosong;
const arrNumSet = new Set();

// Mengisi array dengan angka acak yang tidak ganda
while (arrNumSet.size <= 11) {       
        arrNumSet.add(Math.floor(Math.random() * 22)); 
}

// Tampilkan Set
let i = 0;
console.log("\nSet\nValue");
arrNumSet.forEach(function (value) {
    console.log(i + " " + value);
    i++;
})

// Membuat Array dari Set
const numbers = Array.from(arrNumSet);

// Tampilkan Array
console.log("\n1. Array\nindex & value");
for (i = 0; i < numbers.length; i++) {
    console.log(i + " " + numbers[i]);
}

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



