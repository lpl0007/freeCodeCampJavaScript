let num = 9;

function factorialCalculator(numb) {
  let result = 1;
  let count = 1;
  while (count <= numb) {
    result *= count;
    count++;
  }

  return result;
}

let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg);