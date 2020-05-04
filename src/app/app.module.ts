// MODULE IMPORTED FROM ANGULAR

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// IMPORTING THE MAIN COMPONENT AND THE OTHER COMPONENTS
import { AppComponent } from './app.component';

import { DatasService } from './services/datas.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DatasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
