import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Emp } from './Emp';
import { Address } from './Address';
const URL = 'http://localhost:8080/employee/';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  save(emp:Emp) {
    return this.http.post(URL,emp ,{
      headers: {"content-type": 'application/json' },
      responseType: "text"
    });
  }
  // searchAll(){
  //   return this.http.get(URL);
}


