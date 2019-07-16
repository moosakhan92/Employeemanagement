import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css']
})
export class NewformComponent implements OnInit {

  // userForm = new FormGroup({
  //   name: new FormControl('Moosa', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
  //   email: new FormControl(),
  //   address: new FormGroup({
  //     street: new FormControl(),
  //     city: new FormControl(),
  //     pincode: new FormControl(null, Validators.pattern('^[0-9][1-9]{5}$'))
  //   })
  // });

  // file3;
  // onSubmit(){
  //   console.log(this.userForm.value);
  //   this.file3=this.userForm.value;
  // }
 
  userForm = new FormGroup({
    name: new FormControl('Moosa', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl(),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      pincode: new FormControl(null, Validators.pattern('^[1-9][0-9]{5}$'))
    })
  });
file4;
  send(){
    console.log(this.userForm.value);
    this.file4=this.userForm.value;
  }

  constructor() { }

  ngOnInit() {
  
  }

}
