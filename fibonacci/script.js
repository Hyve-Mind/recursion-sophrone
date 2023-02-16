//Using iteration
function fibs(num) {
  const array = [];

  let fib1 = 0;
  let fib2 = 1;

  for (let i = 0; i < num; i++) {
    const newNum = fib1 + fib2;
    fib1 = fib2;
    fib2 = newNum;
    array.push(newNum);
  }

  console.log(array);
}
//fibs(5); // [1, 2, 3, 5, 8]

//Using Recursion

function fibsRec(n) {
  return n <= 0
    ? "Please enter a positive number"
    : n === 1
    ? [0]
    : n === 2
    ? [0, 1]
    : [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];
}

console.log(fibsRec(12));
