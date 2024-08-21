import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiveService {
  private firstName:string="";
  private lastName:string="";
  private email:string="";
  private password:string="";
  private confirmPassword:string="";
  setFirstName(firstName:string){this.firstName=firstName;
  }
  getFirstName(){return this.firstName;

  }
  setLastName(lastName:string){this.lastName=lastName;
  }
  getLastName(){return this.lastName;

  }
  setEmail(email:string){this.email=email;

  }
  getEmail(){return this.email;

  }
  setPassword(password:string){this.password=password;

  }
  getPassword(){return this.password;

  }
  setConfirmPassword(confirmPassword:string){this.confirmPassword=confirmPassword;
  }
  getConfirmPassword(){return this.confirmPassword;
  }
  constructor() { }

}
