let nilai = 100;

if (nilai >= 80 && nilai <= 100) {
  nilai = "A";
} else if (nilai >= 70 && nilai <= 80) {
  nilai = "B";
} else if (nilai >= 60 && nilai <= 70) {
  nilai = "C";
} else {
  nilai = "D";
}
console.log(nilai);

// && => AND semua kondisi harus terpenuhi
// || => OR salah satu kondisi harus terpenuhi

nilai = 50;
let banding = nilai >= 80 && nilai <= 100; // antara true or false
console.log(banding, "logic AND");

banding = nilai >= 80 || nilai <= 100; // antara true or false
console.log(banding, "logic OR");

banding = nilai != 50; // antara true or false
console.log(banding, "logic NOT");

// apa beda nya == dan ===
// == => hanya membandingkan nilai nya saja
// === => membandingkan nilai dan tipe data nya

let x = 50;
let y = "50";

banding = x == y; // antara true or false
console.log(banding, "==");

banding = x === y; // antara true or false
console.log(banding, "===");

// if else ini bisa kita bikin bersarang loh
let number = 5;
if (number > 5) {
  if (number % 2 === 0) {
    console.log("lebih besar dari 5 dan genap");
  } else {
    console.log("lebih besar dari 5 dan ganjil");
  }
} else {
  if (number % 2 === 0) {
    console.log("lebih kecil atau sama dengan dari 5 dan genap");
  } else {
    console.log("lebih kecil atau sama dengan dari 5 dan ganjil");
  }
}
