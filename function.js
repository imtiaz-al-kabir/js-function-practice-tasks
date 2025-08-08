/*
# Simple function Related Practice Tasks

### Task-1  
Take four parameters. Multiply the four numbers and then return the result 
*/

function mul(num1, num2, num3, num4) {
  return num1 * num2 * num3 * num4;
}

const mult = mul(2, 3, 4, 5);
console.log(mult);

/*
### Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
*/

function evenOdd(num) {
  if (num % 2 === 0) {
    return num / 2;
  } else {
    return num * 2;
  }
}

const evenodd = evenOdd(5);
console.log(evenodd);

/*
### Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.


*/

function make_avg(arrs, size) {
  let sum = 0;
  let avg = 1;

  for (let arr of arrs) {
    sum = sum + arr;
    console.log(sum);
    avg = sum / size;
  }
  return avg;
}
let avg1 = make_avg([2, 4, 5, 6], 4);
console.log(avg1);

/*
### Task-4  
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
*/

function count_zero(binaryStr) {
  let c = binaryStr.length;
  let count = 0;
  for (let i = 0; i < c; i++) {
    if (binaryStr[i] === "0") {
      count = count + 1;
    }
  }
  return count;
}

const counts = count_zero("01010010001");
console.log(counts);

/*
### Task-5 
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd`
*/

function odd_even(nums) {
  if (nums % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(odd_even(6));
