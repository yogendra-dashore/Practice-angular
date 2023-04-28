import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Options,LabelType } from '@angular-slider/ngx-slider';
@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css']
})
export class ListbookComponent implements OnInit {

  constructor(private bookService: BookService){

  }
  minValue: number = 100;
  maxValue: number = 50000;
  options: Options = {
    floor: 0,
    ceil: 50000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>Min price:</b> Rs" + value;
        case LabelType.High:
          return "<b>Max price:</b> Rs" + value;
        default:
          return "Rs" + value;
      }
    }
  };

  books = []
ngOnInit(): void {
  this.bookService.getAllBook().subscribe(resp=>{
    console.log(resp);
    this.books = resp.data;
  })
}

deleteBook(bookId:any){
console.log("BookId : " +bookId);
this.bookService.deleteBookById(bookId).subscribe(resp=>{

  this.books = this.books.filter(book=> book['id'] != bookId)
  alert("Book Deleted");
})

}

filterBook(){
  console.log("filterbook");
  
  console.log(this.minValue);
  console.log(this.maxValue);
  this.bookService.filterBookByPrice(this.minValue,this.maxValue).subscribe(resp=>{
    this.books  = resp.data ; 
  })
}



}
