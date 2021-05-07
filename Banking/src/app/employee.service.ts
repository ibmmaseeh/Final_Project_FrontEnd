import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Emp } from './Emp';
import { Address } from './Address';
const URL = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  updateAccount(emp:Emp,id:string){
    return this.http.put(URL+'employee/'+id,emp,{
      headers: {"content-type": 'application/json' }
    });
  }
  updateCustomer(emp:Emp,id:string){
    return this.http.put(URL+'employee/'+id,emp,{
      headers: {"content-type": 'application/json' }
    });
  }

  constructor(private http: HttpClient) { }
  save(emp: Emp) {
    return this.http.post((URL + 'employee'), emp, {
      headers: { "content-type": 'application/json' },
      responseType: "text"
    });
  }
  getByAccountNumber(accountNumber: string) {

    return this.http.get('http://localhost:8080/employee/' + accountNumber);
  }
  getAll() {
    return this.http.get('http://localhost:8080/employee');
  }
  getByAccount(accountNumber: string) {

    return this.http.get('http://localhost:8080/customer/' + accountNumber);
  }

}
