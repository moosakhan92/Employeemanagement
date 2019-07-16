import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http'


@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  constructor(private _http: HttpClient) { }

  jsfile: any = {};
  msg: string = " Employee has been added successfully";
  chk: boolean = false;
  _url = "http://localhost:2000/empjson";

  mysubmit(d) {
    this.jsfile = {
      "id": d.id,
      "name": d.name,
      "salary": d.salary
    }
    this._http.post(this._url, this.jsfile).subscribe((res:Response)=>{this.chk=true});
  }

  ngOnInit() {

  }

}
