


// operations
//1) get the all the books who wrote the book(findbyauthor)

// index.ts
import { Author } from './Author';
import { Bookk } from './Bookk';

// Create an author
const author1 = new Author('J.K. Rowling', 98);
const author2 = new Author('George R.R. Martin', 99);
const author3 = new Author('Isaac Asimov', 100);

// Create books
const book1 = new Bookk('Harry Potter and the Philosopher\'s Stone', 20.99, author1);
const book2 = new Bookk('A Game of Thrones', 25.50, author2);
const book3 = new Bookk('Foundation', 15.75, author3);

// Create a list of books
let bookList: Bookk[] = [book1, book2, book3];


bookList.filter(e=>e.bookAuthor.authorName==="Isaac Asimov").forEach(e=> console.log(e));


 

