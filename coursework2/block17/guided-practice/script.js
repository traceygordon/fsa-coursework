class Sentence {
    data;
    constructor(GivenData) {
        this.data = GivenData;
    }

    getWordCount() {

        if (this.data) {

            this.wordsArray = this.data.split(' ');
            return wordsArray.length;
        }
        return 0;
    }
    hasLetter(letter) {
        return this.data

    }

    getLetterCount(letter) {

        if (!this.hasLetter(letter)) {

            return 0;
        }
    }



}


let GivenData = prompt("Enter a sentence");

const mySentence = new Sentence(GivenData);


console.log(mySentence.getWordCount());
console.log(mySentence.hasLetter("z"));