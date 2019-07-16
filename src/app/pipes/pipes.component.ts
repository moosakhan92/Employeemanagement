import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  name:string = "Moosa Khan";
  salary: number = 25000;
  today = new Date();
  value = "2";

  ngOnInit() {
  }

}
