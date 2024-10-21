
import { Author} from './Author';
export class Bookk
{
    bookName : string;
    bookPrice: number;
    bookAuthor: Author;

    constructor(bookName:string,bookPrice:number,bookAuthor:Author)
    {
        this.bookName=bookName;
        this.bookPrice=bookPrice;
        this.bookAuthor = bookAuthor;
    }


}