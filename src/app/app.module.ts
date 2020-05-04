// MODULE IMPORTED FROM ANGULAR

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// IMPORTING THE MAIN COMPONENT AND THE OTHER COMPONENTS
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { DatasService } from './services/datas.service';
import { TodoComponent } from './components/todo/todo/todo.component';
import { TableComponent } from './components/table/table/table.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TodoComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
