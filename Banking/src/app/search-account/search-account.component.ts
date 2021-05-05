import { Component, OnInit } from '@angular/core';
import {Emp} from '../Emp';
import { EmployeeService } from '../employee.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-search-account',
  templateUrl: './search-account.component.html',
  styleUrls: ['./search-account.component.css']
})
export class SearchAccountComponent implements OnInit {
  emp:Emp = new Emp();
  empResult:any;
  empArray:Emp[]=[];
  accountNumber: string = '';

  constructor(private employeeService: EmployeeService) { }
  search() {
    const accountNumber = this.accountNumber.trim();
    console.log(accountNumber);
    if (accountNumber) {
      const promise = this.employeeService.getByAccountNumber(accountNumber);
        promise.subscribe(response => {
          this.empResult = [response];

          if ( this.empResult) {

            this.empArray = this.empResult;
          }
          else {
            alert("Record not found");
            this.empArray = [];
          }
        },
        error => {
          console.log(error);
          alert('error happened..')
        })
    }
    else {
      console.log("1");
    }
  }


getAccounts() {
  const observable = this.employeeService.getAll();
  observable.subscribe(response => {
    this.empResult = response;
    if (this.empResult.length) {
      this.empArray = this.empResult;
    }
  }, error => alert("Error occurred"));
}

  ngOnInit(): void {
    this.getAccounts();
  }

}
