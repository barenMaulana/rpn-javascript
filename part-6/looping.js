let i = 0;
let j = 5;

// looping dari kiri atau depan
while (i < 5) {
  console.log(i);
  i++;
}

// looping dari kanan atau belakang
while (j >= 0) {
  console.log(j);
  j--;
}

// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 5; i >= 0; i--) {
  console.log(i);
}

// contoh kasus
let my_name = "Baren";

// method length hanya berlaku untuk tipe data string dan array
// mengembalikan nilai angka
for (let i = 0; i < my_name.length; i++) {
  console.log(my_name[i]);
}

// membalikan suatu kata, tanpa menggunakan method reverse
my_name = "baren";
let my_name_reverse = "";

for (let i = my_name.length - 1; i >= 0; i--) {
  my_name_reverse += my_name[i];
}
console.log(my_name_reverse);

// nested loop
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(j);
  }
  console.log("");
}
console.log("Selesai");

// kesimpulan :
// looping akan sering bertemu dengan method length
// looping membuat proses lebih singkat
// looping membuat proses lebih dinamis
