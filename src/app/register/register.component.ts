import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { first } from 'rxjs';
import { RegisterServiveService } from '../Services/register-servive.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup;
  constructor(private fb:FormBuilder,private registerService:RegisterServiveService) { }
  ngOnInit(): void {
    this.registerForm=this.fb.group({
       firstName:[''],
        lastName:[''],
    });
  }
  onsubmit(){
    // console.log(this.registerForm.value);
    this.registerService.setFirstName(this.registerForm.value.firstName);
    this.registerService.setLastName(this.registerForm.value.lastName);
    const firstName=this.registerService.getFirstName();
    const lastName=this.registerService.getLastName();
    console.log(firstName,lastName);
  }
}
