import { Component, OnInit } from '@angular/core';
import { Emp } from '../Emp';
import { Address } from '../Address';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {
  emp: Emp = new Emp();
  empResult: any;
  empArray: Emp[] = [];
  accNumber: string = '';
  constructor(private employeeService: EmployeeService) { }
  searchAccount() {
    const accountNumber = this.accNumber;
    if (accountNumber) {
      if (accountNumber.trim()) {
        const promise = this.employeeService.getByAccountNumber(accountNumber);
        promise.subscribe(response => {
          this.empResult = response;
          if (this.empResult.length>0) {
            this.empArray = this.empResult;
            this.empArray.forEach(emp => {

              this.emp = emp;
            });
          }
          else {
            alert("Record not found");
          }
        },
          error => {
            if (!error.ok)
              alert("Error !! : " + error.headers.get("error"))
          });
      }
      else {
        alert("Please provide account number");
      }
    }
    else {
      alert("Please provide account number");
    }
  }
  updateAcc() {

      const promise = this.employeeService.updateAccount(this.emp, this.emp.id);
      promise.subscribe(response => {
        alert('Account Updated..')
      },
        error => {

              alert("Error occurred");

        })
    }

  ngOnInit(): void {
  }

}
