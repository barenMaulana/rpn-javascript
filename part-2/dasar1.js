// cara membuat variabel
var a = "a";
let b = "b";
const c = "c";

// variabel bisa menampung tipe data string (text), integer, boolean, array, object
let nama = "Baren"; // string
let umur = 20; // integer
let apakahBenar = true; // boolean
let uang = 5000.5; // number dengan koma

// operator aritmatika
let angka1 = 10;
let angka2 = 20;

console.log(angka1 + angka2, "penjumlahan"); // 30
console.log(angka1 - angka2, "pengurangan"); // -10
console.log(angka1 * angka2, "perkalian"); // 200
console.log(angka1 / angka2, "pembagian"); // 0.5
console.log(angka1 % angka2, "hasil bagi"); // 10

// assignment
let penampungHasilOperatorAritmatika = angka1 + angka2;
console.log(penampungHasilOperatorAritmatika); // 30

penampungHasilOperatorAritmatika = angka1 - angka2;
console.log(penampungHasilOperatorAritmatika); // -10

penampungHasilOperatorAritmatika = angka1 * angka2;
console.log(penampungHasilOperatorAritmatika); // 200

penampungHasilOperatorAritmatika = angka1 / angka2;
console.log(penampungHasilOperatorAritmatika); // 0.5

penampungHasilOperatorAritmatika = angka1 % angka2;
console.log(penampungHasilOperatorAritmatika); // 10

// concatenation
let firstname = "Baren";
let lastname = "Maulana";
let fullname = firstname + " " + lastname;

console.log(fullname); // Baren Maulana
console.log(firstname + " " + lastname); // Baren Maulana
console.log(firstname - lastname); // NaN

// membaca code dari atas ke bawah kiri ke samping
let number = 20;
console.log(number + 10); // 30
number = 10;
console.log(number + 10); // 20
number = false;
console.log(number + 10); // 10 , kenapa false + 10 = 10? karena false = 0 dan true = 1

// contoh error
const hewan = "jerapah";
console.log(hewan);
hewan = "kucing"; // error karena hewan sudah di deklarasikan dengan const
