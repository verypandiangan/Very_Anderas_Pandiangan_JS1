// Tugas JavaScript Very Andreas Pandiangan

// Menggunakan if, else
let angka = 10;
if (angka > 10) {
  console.log("Angka lebih besar dari 10");
} else if (angka < 10) {
  console.log("Angka lebih kecil dari 10");
} else {
  console.log("Angka sama dengan 10");
}

// Menggunakan nested if
let x = 5;
if (x > 0) {
  if (x % 2 === 0) {
    console.log("Angka positif dan genap");
  } else {
    console.log("Angka positif dan ganjil");
  }
} else if (x < 0) {
  console.log("Angka negatif");
} else {
  console.log("Angka nol");
}

// Menggunakan switch case
let hari = "Senin";
switch (hari) {
  case "Senin":
    console.log("Hari kerja");
    break;
  case "Sabtu":
  case "Minggu":
    console.log("Hari libur");
    break;
  default:
    console.log("Hari tidak valid");
}

// Menggunakan for statement
for (let i = 1; i <= 5; i++) {
  console.log("Iterasi ke-" + i);
}

// Menggunakan while statement
let j = 1;
while (j <= 5) {
  console.log("Iterasi ke-" + j);
  j++;
}

// Menggunakan do while statement
let k = 1;
do {
  console.log("Iterasi ke-" + k);
  k++;
} while (k <= 5);

// Menggunakan penggunaan function
function tambah(a, b) {
  return a + b;
}

let hasilPenjumlahan = tambah(3, 4);
console.log("Hasil penjumlahan: " + hasilPenjumlahan);
