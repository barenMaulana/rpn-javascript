// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

let i = 1;

// menggunakan while
console.log("Menggunakan while");
while (i <= 100) {
  if (i % 2 === 0) {
    console.log(`${i} GENAP`);
  } else {
    console.log(`${i} GANJIL`);
  }
  i++;
}

console.log("");

// menggunakan for
console.log("Menggunakan for");
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`${i} GENAP`);
  } else {
    console.log(`${i} GANJIL`);
  }
}
