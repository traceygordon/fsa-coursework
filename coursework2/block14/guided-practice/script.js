const myInstruments = ["flute", "clarinet", "saxophone", "trumpet", "trombone"];

console.table(myInstruments)


myInstruments.unshift("saxophone");
myInstruments.splice(3, 1);
myInstruments.push("tuba");
myInstruments.push("bassoon");


console.log(getFirstInstrument(myInstruments));
console.log(getLastInstrument(myInstruments));

console.table(getFirstAndLastInstruments(myInstruments));
console.table(getFirstThreeInstruments(myInstruments));
console.table(getTInstruments(myInstrumentscd));

function getFirstInstrument(instruments) {
    return instruments[0];

}

function getLastInstrument(instruments) {
    let index = instruments.length - 1;
    return instruments[index]
}

function getFirstAndLastInstruments(instruments) {
    let firstInstrument = getFirstInstrument(instruments);
    let lastInstrument = getLastInstrument(instruments);

    const newArray = [firstInstrument, lastInstrument]

    return [newArray];
}

function getFirstThreeInstruments(instruments) {
    return instruments.slice(0, 3)

}

function getTInstruments(instruments){

    const tInstruments = []
for (let index = 0; index < instruments.length; index++) {
   let currentInstrument = instruments[index]
    if(currentInstrument.charAt(0) ==="t"){

        tInstruments.push(currentInstrument)
    }
}

return tInstruments;

}