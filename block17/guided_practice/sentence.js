// A class named Sentence
class Sentence {
  // Constructor that takes a parameter named data, which sets `this.data` for an instance of a sentence
  constructor(data) {
    this.data = data;
  }
  // Add method to Sentence class that counts the nubmer of words in your sentence
  wordCount() {
    return this.data.split(' ').length;
  }
  // Add a method which takes a letter and returns true or false if the letter is in your sentence
  hasLetter(letter) {
    return this.data.indexOf(letter) !== -1;
  }
  // Add a method that takes a letter and returns the number of times that letter is in the sentence
  letterCount(letter) {
    let count = 0;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === letter) {
        count++;
      }
    }
    return count;
  }
  // Add a method that will return an object with a key for each word in your sentence and a value for how many times the word appears
  stats() {
    const obj = {};
    const words = this.data.split(' ');
    words.forEach((word) => {
      if (obj[word] === undefined) {
        obj[word] = 0;
      }
      obj[word]++;
    });
    return obj;
  }
}

// Use `window.prompt` to get some data from user to create a sentence
const data = window.prompt(
  'enter a sentence',
  'the quick brown fox jumped over the fence'
);
const s1 = new Sentence(data);
console.log(s1.wordCount());
console.log(s1.hasLetter('X'));
console.log(s1.hasLetter('q'));
console.log(s1.letterCount('e'));
console.log(s1.letterCount(' '));
console.log(s1.stats());
