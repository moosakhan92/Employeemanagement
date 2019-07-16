import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private user:UserService) { }

  loginUser(e){
    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    if (username == 'admin' && password == 'admin'){
      this.user.setIsUserLoggedIn();
      this.router.navigate(['dashboard']);
    } else{
      window.alert('Please Enter Correct Username And Password')
    }
  }

  ngOnInit() {
  }



}
