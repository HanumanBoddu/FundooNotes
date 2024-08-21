import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup} from '@angular/forms';
import { RegisterServiveService } from '../Services/register-servive.service';
import { NotesService } from '../Services/notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmpassword',
  templateUrl: './confirmpassword.component.html',
  styleUrls: ['./confirmpassword.component.scss']
})
export class ConfirmpasswordComponent implements OnInit {
  userform!: FormGroup;
  constructor(private fb:FormBuilder,private registerService:RegisterServiveService,private notesService:NotesService,private router:Router) { }
  ngOnInit(): void {
    this.userform=this.fb.group({
      email:[''],
      password:[''],
      confirmpassword:['']
    });
  }
  submitForm(){
    const firstName=this.registerService.getFirstName();
    const lastName=this.registerService.getLastName();
    this.registerService.setEmail(this.userform.value.email);
    this.registerService.setPassword(this.userform.value.password);
    const email=this.registerService.getEmail();
    const password=this.registerService.getPassword();
    console.log(firstName,lastName,email,password);
    this.notesService.signUp("userSignUp",{
      "firstName":firstName,
      "lastName":lastName,
      "email":email,
      "service":"advance",
      "password":password
    }).subscribe({
      next:(data)=>{
        console.log(data);
        this.router.navigate(['']);
      },
      error:(error)=>{
        console.log(error);
      }
    });
  }
}
