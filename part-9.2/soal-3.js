function cariMedian(arr) {
  // you can only write your code here!

  // sorting
  let sorted = false;
  let sorted_data = [];
  let index = 0;
  let max = 0;
  while (!sorted) {
    if (sorted_data.length == 0) {
      max = arr[index] < arr[index + 1] ? arr[index + 1] : arr[index];
      sorted_data.push(
        arr[index] < arr[index + 1] ? arr[index] : arr[index + 1]
      );
    } else if (index > 1) {
      if (arr[index] == undefined) {
        sorted_data.push(max);
      } else {
        sorted_data.push(arr[index] > max ? max : arr[index]);
        max = arr[index] > max ? arr[index] : max;
      }
    } else if (sorted_data.length == arr.length) {
      // checking apakah all sorted
      let expected_result = sorted_data.length;
      let check_result = 1;
      for (let i = 1; i < sorted_data.length; i++) {
        if (sorted_data[i - 1] <= sorted_data[i]) {
          check_result++;
        }
        if (check_result == expected_result) {
          sorted = true;
          break;
        }
      }

      // sorting lagi sisanya
      if (!sorted) {
        for (let i = 0; i < sorted_data.length; i++) {
          let temp = sorted_data[i];
          if (
            sorted_data[i] >= sorted_data[i + 1] &&
            sorted_data[i + 1] != undefined
          ) {
            sorted_data[i] = sorted_data[i + 1];
            sorted_data[i + 1] = temp;
          }
        }
      }
    }
    if (index == arr.length) {
      index = 0;
    }
    index++;
  }

  // check ganjil atau genap
  let median = 0;
  if (sorted_data.length % 2 != 0) {
    median = sorted_data.length / 2;
    median = Math.floor(median);
    median = sorted_data[median];
  } else {
    median =
      (sorted_data[Math.floor(sorted_data.length / 2) - 1] +
        sorted_data[Math.ceil(sorted_data.length / 2)]) /
      2;
  }

  return median;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
