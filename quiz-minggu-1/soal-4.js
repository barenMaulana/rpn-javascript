//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
  // pertama cek dulu jumlah keseluruhan kata
  if (str.length % 2 == 0) {
    // jumlah genap, lanjut cek apakah x dan o jumlah nya sama
    let x = 0;
    let o = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == "o") {
        o++;
      } else if (str[i] == "x") {
        x++;
      }
    }
    // proses cek terakhir
    if (x == o) return true;
    return false;
  } else {
    return false;
  }
}

// TEST CASES
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true
