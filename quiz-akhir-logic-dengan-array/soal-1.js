/*
    Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. 
    Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, 
    jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], 
    maka jarak terdekat dari 'o' ke 'x' adalah 2. 
    Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  // you can only write your code here!
  let count = 0;
  let x_found = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "o" || count > 0) {
      if (arr[i] == "x") {
        x_found = true;
        break;
      }
      count++;
    }
  }

  if (!x_found) {
    count = 0;
    for (let i = arr.length; i >= 0; i--) {
      if (arr[i] == "o" || count > 0) {
        if (arr[i] == "x") {
          x_found = true;
          break;
        }
        count++;
      }
    }
  }

  if (!x_found) {
    return 0;
  }

  return count;
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
