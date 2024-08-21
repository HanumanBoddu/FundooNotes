import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  serachText:string='';
  constructor() { }
  ngOnInit(): void {
  }
  onSearch(){
    console.log(this.serachText);
  }
}
