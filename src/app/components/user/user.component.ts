import { Component, OnInit } from '@angular/core';
import { DatasService } from '../../services/datas.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string;
  email: string;
  hobby: Hobby;
  age: number;
  constructor( private data: DatasService ) {
    this.name = 'Armel';
    this.age = 24;
    this.email = 'armelzong@gmail.com';
    this.hobby = {
      h_1: 'musique',
      h_2: 'basket',
      h_3: 'coding'
    };

  }

  ngOnInit(): void {
  }
  Clicking($event){
   console.log('Bonjour les amis');
   alert('les enfants ca va ');
  }

}
interface Hobby {
  h_1: string;
  h_2: string;
  h_3: string;
}
