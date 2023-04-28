import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { ListbookComponent } from '../listbook/listbook.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  name="";
  price="";
  quantity="";
  authorname="";
  availableind:boolean=true

  constructor(private bookService: BookService, private router: Router){

  }

  submit(){
    console.log(this.name);
    console.log(this.price);
    console.log(this.quantity);
    console.log(this.authorname);
    console.log(this.availableind);

    let book= {"name":this.name, "price":this.price, "quantity":this.quantity ,"authorname":this.authorname, "availableind":this.availableind}

 this.bookService.addBook(book).subscribe(resp=>{
  console.log(resp);
  alert(resp.msg);
  this.router.navigateByUrl("/listBook");
  },error=>{
    console.log(error);
  })

}
  }



