// Recap Functions 1

// function add3Numbers(first, second, third) {
//   const sum = first + second + third; // function scope
//   console.log(sum);
// }

// add3Numbers(4, 5, 6);

// Return Statement

// function add3Numbers(first, second, third) {
//   const sum = first + second + third;
//   return sum;
// }

// const firstSum = add3Numbers(4, 5, 6);
// const secondSum = add3Numbers(10, 20, 30);

// Multiple Return Statements - only one return value

function checkInputLength(inputString) {
  if (typeof inputString !== "string") {
    // Early return statement
    return "Not a string";
  }

  if (inputString.length > 3) {
    return true;
    console.log("I am never logged - true"); // this is never logged
  } else {
    return false;
    console.log("I am never logged - false"); // this is never logged
  }
}

console.log(checkInputLength("Andrea"));

// Arrow Functions

function add3Numbers(first, second, third) {
  const sum = first + second + third;
  return sum;
}

console.log(add3Numbers(1, 2, 3));

const add2Numbers = (first, second) => {
  const sum = first + second;
  return sum;
};

const sum2Numbers = add2Numbers(3, 4);
console.log(sum2Numbers);

// Implicit Return Statement - only with single return statement - do not use for void function
const addOne = (number) => number + 1;

console.log(addOne(5));
