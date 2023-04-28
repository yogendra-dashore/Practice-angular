import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { LoginComponent } from './login/login.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ListbookComponent } from './listbook/listbook.component';
import { BookcriteriaComponent } from './bookcriteria/bookcriteria.component';

const routes: Routes = [

{
  component:SignupComponent,
  path:"signup"
},

{

  component:LoginComponent,
  path:"login"
},

{
component:ForgetpasswordComponent,
path:"forgetpassword"

},
{
component:SignupComponent,
path:""

},
{
 component:AddBookComponent,
 path:"addBook"
  
},
{
  component:ListbookComponent,
  path:"listBook"
},
{
  component:BookcriteriaComponent,
  path:"bookcriteria"
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
