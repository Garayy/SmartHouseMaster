import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { promise } from 'protractor';
import { Smarthouse } from './smarthouse';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private api = 'http://localhost:3000/';
  constructor( private http: HttpClient) {  console.log('hi!') }

  getAll(){
    const path = this.api+("focos");
    return this.http.get<Smarthouse[]>(path);
  }
  updateTask(smarthouse: Smarthouse){
    const path = `${this.api}focos/${smarthouse.id}`;
    return this.http.put<Smarthouse>(path, smarthouse);
  }
  getAllServos(){
    const path = this.api+("servos");
    return this.http.get<Smarthouse[]>(path);
  }
  updateServos(smarthouse: Smarthouse){
    const path = `${this.api}servos/${smarthouse.id}`;
    return this.http.put<Smarthouse>(path, smarthouse);
  }

}
