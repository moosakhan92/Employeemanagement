import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-form',
  templateUrl: './validation-form.component.html',
  styleUrls: ['./validation-form.component.css']
})
export class ValidationFormComponent implements OnInit {

  constructor() { }

  myName='Moosa Khan';
  file3;
  onSubmit(value: any){
    console.log(value);
    this.file3=value;
  }

  ngOnInit() {
  }

}
