import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {

  constructor() { }
  myName='Moosa Khan';
  file;
  file2;
  onSubmit(value: any){
    console.log(value);
    this.file=value;
  }

  send(data: any){
    console.log(data);
    this.file2=data;
  }
  

  ngOnInit() {
  }

}
