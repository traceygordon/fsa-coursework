class Book {
  title;
  author;
  isCheckedOut;
  constructor(title, author, isCheckedOut) {
    this.title = title;
    this.author = author;
    this.isCheckedOut = isCheckedOut;
  }
  // Method to toggle the isCheckedOut status
  toggleCheckOut() {
    this.isCheckedOut = !this.isCheckedOut;
  }
  // Method to display the status of the book
  checkStatus() {
    if (this.isCheckedOut) {
      console.log(`${this.title} by ${this.author} is checked out.`);
    } else {
      console.log(`${this.title} by ${this.author} is available.`);
    }
  }
}
// Define a Library Class
// The Library should have a books array to store all Book objects.
// Add a method called addBook that takes a Book object and adds it to the books array.
// Create a method called listAvailableBooks that logs all the books that are currently not checked out.
class Library {
  bookShelf = [];
  addBook(givenBook) {
    this.bookShelf.push(givenBook);
  }
  constructor(bookShelf) {
    this.bookShelf = bookShelf;
  }
}
// Use your classes:
// Create an instance of Library.
const gothamLibrary = new Library([]);
// Create 3 book objects
const book1 = new Book("Catcher In The Rye", "J.D. Salinger", false);
const book2 = new Book("Green Eggs and Ham", "Dr. Suess", false);
const book3 = new Book("Coding For Dummies", "A Smartie", false);
// Toggle the checkout status of one book.
book1.toggleCheckOut();
// Add the books to instance of library
gothamLibrary.addBook(book1);
gothamLibrary.addBook(book2);
gothamLibrary.addBook(book3);
// Console log all available books in the library.
console.log(gothamLibrary);
