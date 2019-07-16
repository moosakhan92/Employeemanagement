import { Injectable } from '@angular/core';
import { myinf } from './myinf';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetServiceService {

  constructor(private _http: HttpClient) {}

  _url="http://localhost:2000/empjson";

  showdata():Observable<myinf[]>{
    return this._http.get<myinf[]>(this._url);
  }
}
