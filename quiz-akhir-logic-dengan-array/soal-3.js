/*
    diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
    fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  let first_char = [];

  // pertama ambil ada abjad apa saja dari data
  for (let i = 0; i < animals.length; i++) {
    if (i == 0) {
      first_char.push(animals[i][0]);
    } else {
      for (let j = 0; j < first_char.length; j++) {
        if (animals[i][0] == first_char[j]) {
          break;
        } else if (first_char.length - 1 == j) {
          first_char.push(animals[i][0]);
        }
      }
    }
  }

  // urutkan abjad dari a - z
  let sorted_first_char = [];
  let all_sorted = false;
  let index = 1;
  let max = "";
  while (!all_sorted) {
    if (sorted_first_char.length == 0) {
      if (first_char[index - 1] < first_char[index]) {
        sorted_first_char.push(first_char[index - 1]);
        max = first_char[index];
      } else {
        sorted_first_char.push(first_char[index]);
        max = first_char[index - 1];
      }
    } else if (sorted_first_char.length < first_char.length) {
      if (max > first_char[index]) {
        sorted_first_char.push(first_char[index]);
      } else if (index < first_char.length) {
        sorted_first_char.push(max);
        max = first_char[index];
      }
      if (index == first_char.length) {
        sorted_first_char.push(max);
      }
    } else if (sorted_first_char.length == first_char.length) {
      // checking apakah all sorted
      let expected_result = sorted_first_char.length;
      let check_result = 1;
      for (let i = 1; i < sorted_first_char.length; i++) {
        if (sorted_first_char[i - 1] < sorted_first_char[i]) {
          check_result++;
        }
        if (check_result == expected_result) {
          all_sorted = true;
          break;
        }
      }

      // sorting lagi sisanya
      if (!all_sorted) {
        for (let i = 0; i < sorted_first_char.length; i++) {
          let temp = sorted_first_char[i];
          if (
            sorted_first_char[i] > sorted_first_char[i + 1] &&
            sorted_first_char[i + 1] != undefined
          ) {
            sorted_first_char[i] = sorted_first_char[i + 1];
            sorted_first_char[i + 1] = temp;
          }
        }
      }
    }

    if (index == first_char.length) {
      index = 0;
    }
    index++;
  }

  let sorted_animals = [];
  for (let j = 0; j < sorted_first_char.length; j++) {
    sorted_animals[j] = [];
    for (let i = 0; i < animals.length; i++) {
      if (animals[i][0] == sorted_first_char[j]) {
        sorted_animals[j].push(animals[i]);
      }
    }
  }

  return sorted_animals;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["kuda", "kancil", "unta", "cicak", "cacing", "ayam", "anoa"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
