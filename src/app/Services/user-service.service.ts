import { Injectable } from '@angular/core';
import { add } from 'winston';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor() {}
  private users:string[] = [];
  addUser(user:string){
    this.users.push(user);
  }
  getUsers():string[] {
    return this.users;
  }
}
