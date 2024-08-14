import { Component } from '@angular/core';
import { UserServiceService } from './Services/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'fundooNotes';
  constructor(private userService:UserServiceService){}
  addItem(item:string){
     this.userService.addUser(item);
  }

  getItems(){
    return this.userService.getUsers();
  }
}
