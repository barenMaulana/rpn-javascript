/*
    Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. 
    Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut, 
    Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. Dari antara faktor tersebut, 
    yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.

    1 * 24 = 3 digit (124)
    3 * 8 = 2 digit (38)
    4 * 6 = 2 digit (46)

    karena dibawah ini 2 digit dan terkecil
    3 * 8 = 2 digit (38)
    4 * 6 = 2 digit (46)

    ya jadikan dia minimum

    misal faktronya angka 1 hanyalah
    1*1 = 2 digit (11)

    Return 2
*/
function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  // check ganjil atau genap
  let result = 0;
  let pembagi = 0;
  if (angka % 2 == 0) {
    pembagi = angka / 2;
    if (pembagi % 2 == 0) {
      if (pembagi >= 10) {
        pembagi = pembagi / 2;
      }
    } else {
      if (pembagi >= 10) {
        pembagi = pembagi / 3;
      }
    }
    result = angka / pembagi;
    result = `${result}${pembagi}`;
  } else if (angka % 3 == 0) {
    pembagi = angka / 3;
    result = angka / pembagi;
    result = `${result}${pembagi}`;
  } else {
    pembagi = angka / 1;
    result = angka / pembagi;
    result = `${result}${pembagi}`;
  }

  return result.length;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
