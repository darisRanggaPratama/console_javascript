// 1. Buat array dengan tipe data numerik berkapasitas 11 elemen yang diisi nilai random berkisar antara 0 sampai dengan 21 dimana menolak elemen yang bernilai ganda, lalu tampilkan hasilnya.

// Membuat array kosong dengan kapasitas 11
const arrayNumeric = new Array(11);

// Membuat fungsi untuk menghasilkan angka acak antara 0 dan 21
function randomNum() {
    return Math.floor(Math.random() * 22);
}

// Membuat fungsi untuk mengecek apakah suatu angka sudah ada di dalam array
function isDuplicate(number, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            return true;
        }
    }
    return false;
}

// Mengisi array dengan angka acak yang tidak ganda
let index = 0;
while (index < arrayNumeric.length) {
    let number = randomNum();
    if (!isDuplicate(number, arrayNumeric)) {
        arrayNumeric[index] = number;
        index++;
    }
}

// Menampilkan array
console.log("1. Array: " + arrayNumeric);
console.log("\nindex & value");
for (i = 0; i < arrayNumeric.length; i++) {
    console.log(i + " " + arrayNumeric[i]);
}

// 2. Ambil elemen yang bernilai genap lalu tampilkan secara ascending.

// Membuat array baru untuk menyimpan elemen genap
let even = [];

// Mengambil elemen genap dari array dan memasukkannya ke array baru
for (let i = 0; i < arrayNumeric.length; i++) {
    if (arrayNumeric[i] % 2 === 0) {
        even.push(arrayNumeric[i]);
    }
}

// Mengurutkan array baru secara ascending menggunakan metode sort
even.sort(function (a, b) {
    return a - b;
});

// Menampilkan array baru
console.log("\n2. Elemen genap: " + even);
console.log("\nindex & value");
for (i = 0; i < even.length; i++) {
    console.log(i + " " + even[i]);
}

// 3. Ambil elemen yang bernilai ganjil lalu tampilkan secara descending.

// Membuat array baru untuk menyimpan elemen ganjil
let odd = [];

// Mengambil elemen ganjil dari array dan memasukkannya ke array baru
for (let i = 0; i < arrayNumeric.length; i++) {
    if (arrayNumeric[i] % 2 !== 0) {
        odd.push(arrayNumeric[i]);
    }
}

// Mengurutkan array baru secara descending menggunakan metode sort
odd.sort(function (a, b) {
    return b - a;
});

// Menampilkan array baru
console.log("\n3. Elemen ganjil: " + odd);
console.log("\nindex & value");
for (i = 0; i < odd.length; i++) {
    console.log(i + " " + odd[i]);
}


// 4. Sisipkan 1 elemen bernilai 100 antara index 4 dan index 5 lalu tampilkan hasilnya.

// Membuat fungsi untuk menyisipkan elemen ke dalam array pada posisi tertentu
let insertNew = new Array(12);
function insertElement(array, position, element) {
    for (let i = 0; i < position; i++) {
        insertNew[i] = array[i];
    }

    // Menyisipkan elemen ke posisi
    insertNew[position] = element;

    // Menggeser elemen setelah posisi ke kanan
    for (let i = insertNew.length - 1; i > position; i--) {
        insertNew[i] = array[i - 1];
    }

}

// Menyisipkan elemen bernilai 100 antara index ke-4 dan ke-5
console.log("\nindex & value");
for (i = 0; i < arrayNumeric.length; i++) {
    console.log(i + " " + arrayNumeric[i]);
}
insertElement(arrayNumeric, 5, 100);


// Menampilkan array
console.log("\n4. Array setelah menyisipkan: " + insertNew);
for (i = 0; i < insertNew.length; i++) {
    console.log(i + " " + insertNew[i]);
}

// 5. Ubah index ke 3 dengan nilai 99 lalu tampilkan hasilnya.
console.log("\nindex & value");
for (i = 0; i < arrayNumeric.length; i++) {
    console.log(i + " " + arrayNumeric[i]);
}
// Mengubah elemen pada index ke-3 dengan nilai 99
arrayNumeric[3] = 99;

// Menampilkan array
console.log("\n5. Array setelah mengubah: " + arrayNumeric);
for (i = 0; i < arrayNumeric.length; i++) {
    console.log(i + " " + arrayNumeric[i]);
}

// 6. Tampilkan semua elemen array dengan mengurutkan nilainya secara descending.

// Membuat array baru untuk menyimpan elemen yang sudah diurutkan secara descending
let desc = [];

// Menyalin elemen dari array ke array baru
for (let i = 0; i < arrayNumeric.length; i++) {
    desc[i] = arrayNumeric[i];
}

// Mengurutkan array baru secara descending menggunakan metode sort
desc.sort(function (a, b) {
    return b - a;
});

// Menampilkan array baru
console.log("\n6. Array diurutkan secara descending: " + desc);

// 7. Hapus index ke 2 lalu tampilkan hasilnya.
let deleteItem = new Array(10);
// Membuat fungsi untuk menghapus elemen dari array pada posisi tertentu
function deleteElement(array, position) {
    // Menggeser elemen setelah posisi ke kiri

    for (let i = 0; i < position; i++) {
        deleteItem[i] = array[i];
    }
    
    // Menggeser elemen setelah posisi ke kanan
    for (let i = position; i < deleteItem.length; i++) {
        deleteItem[i] = array[i + 1];
    }
}

// Menghapus elemen pada index ke-2
deleteElement(arrayNumeric, 2);

// Menampilkan array
console.log("\n7. Array setelah menghapus: " + deleteItem);
for (i = 0; i < deleteItem.length; i++) {
    console.log(i + " " + deleteItem[i]);
}

//8. Tampilkan semua elemen array dengan mengurutkan nilainya secara ascending.

// Membuat array baru untuk menyimpan elemen yang sudah diurutkan secara ascending
let asc = [];

// Menyalin elemen dari array ke array baru
for (let i = 0; i < arrayNumeric.length; i++) {
    asc[i] = arrayNumeric[i];
}

// Mengurutkan array baru secara ascending menggunakan metode sort
asc.sort(function (a, b) {
    return a - b;
});

// Menampilkan array baru
console.log("\n8. Array diurutkan secara ascending: " + asc);



