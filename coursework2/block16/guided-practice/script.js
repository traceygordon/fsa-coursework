const items = [
    { id: 1, name: 'foo', price: 7 },
    { id: 2, name: 'bar', price: 6 },
    { id: 3, name: 'bazz', price: 9 },
    { id: 4, name: 'quq', price: 13 }
  ];


//   let requestedItem = prompt("Enter the item name.", "");

//   let found = items.find(item) => {return requestedItem === item.name;})

//   if(found.name){
// console.log("We found it!" + item)

//   }
//   else{
// console.log("Nope")

//   }

const search = prompt('enter a string, we will see the items which have that string in their name', 'ba');
const filterdItems = items.filter(item => {return item.name.includes(search)})

console.table(filterdItems)