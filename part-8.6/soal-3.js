//tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  let selisih = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (selisih == 0) {
      selisih = arr[i] - arr[i - 1];
    } else {
      if (arr[i - 1] != undefined) {
        if (selisih != arr[i] - arr[i - 1]) {
          return false;
        }
      } else if (i == 0) {
        return true;
      }
    }
  }
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 4, 5, 6, 8])); // false
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
