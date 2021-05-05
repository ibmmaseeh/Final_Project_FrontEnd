import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Emp } from './Emp';
import { Address } from './Address';
const URL = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  updateAccount(accountNumber: string, updatedBody: { firstName: string; lastName: string; houseNumber: string; city: string; state: string; pinCode: string; type: string; status: string; balance: string; accountNumber: string; }) {
    const endpointURL = 'http://localhost:8080/employee/' + accountNumber;
    return this.http.put(endpointURL, updatedBody);
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

}
