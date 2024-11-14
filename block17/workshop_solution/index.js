// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === 'string') {
      this.data = str.split(',').map((number) => number * 1);
    } else {
      this.data = data;
    }
  }
  count() {
    //return the count of numbers in data
    // Array.length is a property representing the number of elements in that array
    return this.data.length;
  }
  printNumbers() {
    //print the numbers in data (along with their indexes)
    this.data.forEach((num, idx) => console.log(`num: ${num}, idx: ${idx}`));

    // Using for loop:
    // for (let i = 0; i < this.data.length; i++) {
    //   console.log(`num: ${this.data[i]}, idx: ${i}`);
    // }
  }
  odds() {
    //return the odd numbers in data
    return this.data.filter((num) => num % 2 === 1);

    // Using for loop:
    // const odds = [];
    // for (const num of this.data) {
    //   if (num % 2 === 1) {
    //     odds.push(num);
    //   }
    // }
    // return odds;
  }
  evens() {
    //return the even numbers in data
    return this.data.filter((num) => num % 2 === 0);

    // Using for loop:
    // const evens = [];
    // for (const num of this.data) {
    //   if (num % 2 === 0) {
    //     evens.push(num);
    //   }
    // }
    // return evens;
  }
  sum() {
    //return the sum of the numbers
    return this.data.reduce((total, num) => total + num, 0);

    // Using for loop:
    // let sum = 0;
    // for (const num of this.data) {
    //   sum += num;
    // }
    // return sum;
  }
  product() {
    //return the product of the numbers
    return this.data.reduce((total, num) => total * num, 1);

    // Using for loop:
    // let product = 1;
    // for (const num of this.data) {
    //   product *= num;
    // }
    // return product;
  }
  greaterThan(target) {
    //return the numbers greater than the target
    return this.data.filter((num) => num > target);

    // Using for loop:
    // let greater = [];
    // for (const num of this.data) {
    //   if (num > target) {
    //     greater.push(num);
    //   }
    // }
    // return greater;
  }
  howMany(target) {
    // return the count of a given number
    let count = 0;
    for (let num of this.data) {
      if (num === target) count++;
    }
    return count;

    // Using Array.filter() & Array.length:
    // return this.data.filter((num) => num === target).length;

    // Using Array.reduce() + a ternary operator & implicit return:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
    // return this.data.reduce(
    //   (acc, current) => acc + (current === target ? 1 : 0),
    //   0
    // );
  }
}

//Prompt the user for a list of integers separated by commas
const str = window.prompt('enter some numbers, like this', '1,2,3,3,5,9');

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count()); //returns count of numbers
n1.printNumbers(); //prints the number along with their indexes
console.log(n1.odds()); //returns odd numbers
console.log(n1.evens()); //returns even numbers
console.log(n1.sum()); //returns sum of numbers
console.log(n1.product()); //returns product of numbers
console.log(n1.greaterThan(3)); //returns numbers greater than another number
console.log(n1.howMany(3)); //return the count of a specific number
