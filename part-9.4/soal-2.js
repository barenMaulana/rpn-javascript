//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
  // you can only write your code here!
  str = str.split("");
  let n = str.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      let temp = str[j];
      if (str[j] > str[j + 1]) {
        str[j] = str[j + 1];
        str[j + 1] = temp;
      }
    }
  }

  return str.join("");
}

// TEST CASES
console.log(urutkanAbjad("hello")); // 'ehllo'
console.log(urutkanAbjad("truncate")); // 'acenrttu'
console.log(urutkanAbjad("developer")); // 'deeeloprv'
console.log(urutkanAbjad("software")); // 'aeforstw'
console.log(urutkanAbjad("aegis")); // 'aegis'
