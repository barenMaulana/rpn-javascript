function pasanganTerbesar(num) {
  // you can only write your code here!
  let max_number = 0;
  let number_to_string = num.toString();
  for (let i = 1; i < number_to_string.length; i++) {
    if (max_number == 0) {
      if (number_to_string[i - 1] > number_to_string[i]) {
        max_number = parseInt(number_to_string[i - 1]);
      }
    } else {
      if (max_number < number_to_string[i]) {
        max_number = parseInt(number_to_string[i]);
      }
    }
  }

  // check how many max number then compare
  let temp_max = [];
  for (let i = 0; i < number_to_string.length; i++) {
    if (number_to_string[i] == max_number) {
      if (number_to_string[i + 1] != undefined) {
        temp_max.push([max_number.toString() + number_to_string[i + 1]]);
      }
    }
  }

  for (let i = 0; i < temp_max.length; i++) {
    if (temp_max.length > 1) {
      let max = 0;
      for (let j = 0; j < temp_max[i].length; j++) {
        if (max == 0) {
          if (parseInt(temp_max[j]) > parseInt(temp_max[j + 1])) {
            max = parseInt(temp_max[j]);
          } else {
            max = parseInt(parseInt(temp_max[j + 1]));
          }
        } else {
          if (max < parseInt(temp_max[j])) {
            max = parseInt(temp_max[j]);
          }
        }
      }
      return max;
    } else {
      return parseInt(temp_max[i]);
    }
  }

  return temp_max;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
console.log(pasanganTerbesar(7941998297)); // 99
