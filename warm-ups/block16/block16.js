// This code snippet is used to update the user's order for Donuts.
// The order is represented by a JavaScript Object with several properties.
// Can you implement 3 functions so that when the User selects the
// Add button, the quantity increases by 1 and
// The remove button, the quantity decreases by one
// The delete button, the quantity is reset to 0
//Also, give the Donut Shop the option to remove a donut type from inventory when they sell out for the day

//represents a customer's donut order
const donutOrder = {
  glazed: 0,
  chocolate: 0,
  bearClaw: 0,
  eclair: 0,
};
//adds one to the donut types quantity
function addOne(donutType) {

}
//removes one from the donut type's quantity
function removeOne(donutType) {

}
//sets donut type's quantity to 0
function removeFromOrder(donutType) {

}

//removes from the menu completely
function removeFromMenu(donutType) {

}





//********************************** Don't touch the below :-) */
function render() {
  let oldMenu = document.getElementById("menu");
  oldMenu?.remove();

  let menu = document.createElement("ul");
  menu.id = "menu";
  for (const donutType in donutOrder) {
    if (donutOrder.hasOwnProperty(donutType)) {
      const li = document.createElement("li");
      const type = document.createElement("h1");
      type.textContent = `${donutType}: ${donutOrder[donutType]}`;
      li.appendChild(type);
      let addButton = document.createElement("button");
      addButton.textContent = "+";
      addButton.onclick = function () {
        addOne(`${donutType}`);
        render();
      };
      li.appendChild(addButton);
      let removeButton = document.createElement("button");
      removeButton.textContent = "-";
      removeButton.onclick = function () {
        removeOne(`${donutType}`);
        render();
      };
      li.appendChild(removeButton);
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Remove from Order";
      deleteButton.onclick = function () {
        removeFromOrder(`${donutType}`);
        render();
      };
      li.appendChild(deleteButton);
      let removeDonutTypeButton = document.createElement("button");
      removeDonutTypeButton.textContent = "Remove From Menu";
      removeDonutTypeButton.onclick = function () {
        removeFromMenu(`${donutType}`);
        render();
      };
      li.appendChild(removeDonutTypeButton);
      menu.appendChild(li);
    }
    document.body.appendChild(menu);
  }
}

render();
