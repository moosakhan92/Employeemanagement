import { Component, OnInit } from '@angular/core';
import { GetServiceService } from '../get-service.service';
import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';

//import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-getjson',
  templateUrl: './getjson.component.html',
  styleUrls: ['./getjson.component.css']
})
export class GetjsonComponent implements OnInit {
 // constructor(private _SES:GetServiceService,) { }
 constructor(private _SES:GetServiceService) { }
  id:number;
  private _head = new Headers({'content-type':'application/json'});
  datafile=[];

  // deleteemp(id){
  //   if(confirm("Are you sure want to delete")){
  //     const _url=`${"http://localhost/2513/empjson"}/${id}`;
  //     return this._http.delete(_url,{_head:this._head}).toPromise().then(()=>{
  //       this._SES.showdata();
  //     });
  //   }
  // }

  ngOnInit() {
    this._SES.showdata().subscribe(k=>this.datafile=k);
  }

}
