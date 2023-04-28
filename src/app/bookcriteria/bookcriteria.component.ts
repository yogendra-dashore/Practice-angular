import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Options,LabelType } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-bookcriteria',
  templateUrl: './bookcriteria.component.html',
  styleUrls: ['./bookcriteria.component.css']
})
export class BookcriteriaComponent {


  constructor(private bookService : BookService)
  {}
  authorname="";
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
  filterBook(){
    console.log("filterbook");
    
    console.log(this.minValue);
    console.log(this.maxValue);
    this.bookService.filterBookByPrice(this.minValue,this.maxValue).subscribe(resp=>{
      this.books  = resp.data ; 
    })
  }
  

  search(){
    console.log("==================Search=====================")
    console.log(this.minValue)
    console.log(this.maxValue)
    console.log(this.authorname)

    this.bookService.searchBookByAuthorName(this.authorname,this.minValue,this.maxValue).subscribe(
      resp=>{
        this.books=resp;
      },error=>{
      console.log(error);
      });
  }



}
