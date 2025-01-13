// Create a simple program in that models a Library system.
//************

// Define a Book class:
// Each Book should have a title, author, and isCheckedOut property.
// Create a method called toggleCheckOut that changes the isCheckedOut status.
class Book {
  title = "";
  author = "";
  isCheckedOut = false;
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  toggleCheckout() {
    this.isCheckedOut = !this.isCheckedOut;
  }
}

// Define a Library Class
// The Library should have a books array to store all Book objects.
// Add a method called addBook that takes a Book object and adds it to the books array.
// Create a method called listAvailableBooks that logs all the books that are currently not checked out.
class Library {
  books = [];
  constructor(books) {
    this.books.concat(books);
  }
  addBook(book) {
    this.books.push(book);
  }
  listAvailableBooks() {
    console.log(this.books);
  }
}

// Use your classes:

// Create an instance of Library.
const gothamLibrary = new Library([]);

// Create 3 book objects
const book1 = new Book("Alice in Wonderland", "Lewis Carroll");
const book2 = new Book("Atomic Habits", "James Clear");
const book3 = new Book("Pride and Prejudice", "Jane Austin");

// Toggle the checkout status of one book.
book1.toggleCheckout();

// Add the books to instance of library
gothamLibrary.addBook(book1);
gothamLibrary.addBook(book2);
gothamLibrary.addBook(book3);

// Console log all available books in the library.
gothamLibrary.listAvailableBooks();
