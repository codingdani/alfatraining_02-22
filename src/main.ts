import BookShelf from "./book-shelf";

import Book from "./book";

const angular = new Book("Angular", 406, 32);
const react = new Book("React", 203, 64);
const vue = new Book("Vue", 101, 11);
const backbone = new Book("Backbone", 302, 0);

console.log(react.toString());

const books = [angular, react, vue, backbone];
console.table(books);

const bookShelf = new BookShelf(books);
console.log(bookShelf.toString());
