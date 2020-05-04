import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  email:string;
  hobby:hobby;
  age:number;
  constructor() {
    this.name="Armel";
    this.age=24;
    this.email="armelzong@gmail.com";
    this.hobby={
      h_1:"musique",
      h_2:"basket",
      h_3:"coding"
    };

  }

  ngOnInit(): void {

  }
  onClick(){
    alert("Bonjour le ga ");
  }

}
interface hobby{
  h_1:string;
  h_2:string;
  h_3:string;
}
