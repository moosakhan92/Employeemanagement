import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUserLoggedIn;
  private username;

  constructor() { 
    this.isUserLoggedIn = false;
  }

  setIsUserLoggedIn(){
    this.isUserLoggedIn = true;
  }

  getIsUserLoggedIn(){
    return this.isUserLoggedIn;
  }
}
