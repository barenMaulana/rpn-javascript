function tentukanDeretGeometri(arr) {
  // you can only write your code here!
  let hasil_bagi = arr[1] / arr[0];
  for (let i = 0; i < arr.length; i++) {
    let temp_hasil_kali = 0;
    if (i > 0) {
      temp_hasil_kali = arr[i] * hasil_bagi;
      if (arr[i + 1] != undefined) {
        if (temp_hasil_kali != arr[i + 1]) {
          return false;
        }
      } else if (i == arr.length - 1) {
        return true;
      }
    }
  }
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
