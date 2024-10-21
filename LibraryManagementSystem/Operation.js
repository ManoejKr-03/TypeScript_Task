"use strict";
// operations
//1) get the all the books who wrote the book(findbyauthor)
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
var Author_1 = require("./Author");
var Bookk_1 = require("./Bookk");
// Create an author
var author1 = new Author_1.Author('J.K. Rowling', 98);
var author2 = new Author_1.Author('George R.R. Martin', 99);
var author3 = new Author_1.Author('Isaac Asimov', 100);
// Create books
var book1 = new Bookk_1.Bookk('Harry Potter and the Philosopher\'s Stone', 20.99, author1);
var book2 = new Bookk_1.Bookk('A Game of Thrones', 25.50, author2);
var book3 = new Bookk_1.Bookk('Foundation', 15.75, author3);
// Create a list of books
var bookList = [book1, book2, book3];
bookList.filter(function (e) { return e.bookAuthor.authorName === "Isaac Asimov"; }).forEach(function (e) { return console.log(e); });
