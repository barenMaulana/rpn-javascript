let i = 0;

while (i < 100) {
  console.log(i);
  i += 5;
}

// looping with condition
i = 0;
while (i < 50) {
  if (i % 2 === 0) {
    console.log(`${i} bilangan genap`);
  } else {
    console.log(`${i} bilangan ganjil`);
  }
  i++;
}

// problem fizzbuzz
for (let i = 1; i < 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} FizzBuzz`);
  } else if (i % 3 === 0 && i % 5 !== 0) {
    console.log(`${i} Fizz`);
  } else if (i % 5 === 0 && i % 3 !== 0) {
    console.log(`${i} Buzz`);
  } else {
    console.log(`${i} `);
  }
}

// break and continue
for (let i = 0; i < 10; i++) {
  if (i === 7) {
    console.log(i, "berhenti disini");
    break;
  }
  console.log(i);
}

console.log("");

for (let i = 0; i < 10; i++) {
  if (i === 7) {
    continue;
  }
  console.log(i);
}
