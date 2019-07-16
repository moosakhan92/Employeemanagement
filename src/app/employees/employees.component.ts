import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }
 public file;
 public fname;
 public lname;
 public nm;
  myfun(v) {
    this.file=v;
    console.log(v.value);
  }

  ngOnInit() {
  }

}
