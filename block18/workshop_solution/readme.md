# Part 1: Writing Test Specifications

## Unit Tests:

### `multiplication` function

- Expect the multiplication function to take in two and only two parameters.
- Expect the first parameter (num1) of the multiplication function to be a number.
- Expect the second parameter (num2) of the multiplication function to be a number.
- Expect `multiplication(num1, num2)` to properly return `num1 * num2`;

### `concatOdds` function

- Expect the concatOdds function to take in two and only two parameters.
- Expect the first parameter (arr1) of the concatOdds function to be an array.
- Expect the second parameter (arr2) of the concatOdds function to be an array.
- Expect the values in the first parameter (arr1) of the concatOdds function to be all numbers.
- Expect the values in the second parameter (arr2) of the concatOdds function to be all numbers.
- Expect the concatOdds function to return one array.
- Expect the returned array of the concatOdds function to contain only numbers from both arr1 and arr2.
- Expect the returned array of the concatOdds function to contain no duplicate numbers.
- Expect the returned array of the concatOdds function to be in ascending order.

## Functional Tests:

### shopping cart

- The shopping cart should properly multiply the final cost of each product in the cart by multiplying the product price by the quantity.
- The shopping cart should properly add the final cost of each product in the cart.
- The shopping cart should properly add the value of tax of the sum of costs of products in the cart.
- The shopping cart should allow a shopper to checkout as a guest.
- The shopping cart should allow a shopper to log in if they have an account.
- The shopping cart should allow a shopper to sign up for an account if they do not have an account and wish to create one.
- The shopping cart should log in the shopper after the creation of an account.
- The shopping cart data should persist if the shopper goes from a guest to a logged in shopper.
- The shopping cart should not allow a shopper to check out if the cart is empty.

<br/>

# Part 2: Defining a Manual Test Suite

## Feature Requirements: Puppy Bowl

### (Main Page)

- The main page should show each player.
- Each players on the main page should have two button attached.
- The first button should be a "See details" button.
- The second button should be a "Remove" button.
- The "See details" button should render a new view which displays the players information (name, breed and assigned team or ""unassigned" if not assigned to a team).
- The "See details" button should render a new view which displays a larger picture of the player.
- The "See details" button should render a new view that includes a "Back" button to return back to the main page view.

### (Adding Player(s))

- The main page should display a form with at least two inputs.
- The main page should display a "Submit" button.
- The forms first input should take in a string which represents the name of a new player.
- The forms second input should take in a string which represents the breed of a new player.
- The main page "Submit" button should properly add the player's information to the data structure holding all of the players information.
- The main page "Submit" button should properly add the player to the list of players on the main page.
- The main page "Submit" button should properly add the player to the list of players on the main page without needing to refresh the page.

### (Removing Player(s))

- The remove player button attached to each player should remove the player from the data structure holding all of the players information.
- The remove player button attached to each player should remove the player from the list of players on the main screen.
- The remove player button attached to each player should remove the player from the list of player son the main screen without needing to refresh the page.

<br/>

## Stretch Goals

### (Single Player View)

- The "See details" button should render a list of each player with the same assigned team and the player selected.
- The "See details" button should render a dropdown selector.
- The options of the dropdown selector should be each of the teams availible as well as an option to unassign the player from all teams.
- After selection an option from the dropdown the single player view should update the assigned team information of the player.
- After selection an option from the dropdown the single player view should update the assigned team information of the player without needing to refresh the page.

### (Adding Players)

- The main page should display a form with a third input.
- The forms third input should take in a string which represents the URL of the image of the player.
- The main page "Submit" button should properly add the player's information to the data structure holding the players information.
- The main page "Submit" button should properly add the player's information and image to the main page without needing to refresh the page.
