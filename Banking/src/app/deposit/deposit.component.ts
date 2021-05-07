import { Component, OnInit } from '@angular/core';
import { Emp } from '../Emp';
import { EmployeeService } from '../employee.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  emp:Emp = new Emp();
  empResult:any;
  empArray:Emp[]=[];


  accountNumber: string = '';
  constructor(private employeeService:EmployeeService) { }
  searchAccount() {
    const accountNumber = this.accountNumber;
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
            Swal.fire("Record not found");
          }
        },
          error => {
            if (!error.ok)
              alert("Error !! : " + error.headers.get("error"))
          });
      }
      else {
        Swal.fire("Please provide account number");
      }
    }
    else {
      Swal.fire("Please provide account number");
    }
  }

  deposit() {
    var a:number=+this.emp.balance
      var b:number=+this.emp.depositAmount;
      a+=b;
      this.emp.balance=a;
      // this.account=this.accountArray;

      {

        const promise = this.employeeService.updateAccount(this.emp, this.emp.id);
        promise.subscribe(response => {
          // alert('Account Updated..')
         Swal.fire("Amount Deposited")
        },
          error => {

                alert("Error occurred");

          })
      }
    }
  ngOnInit(): void {
  }

}
