import { Component, OnInit } from '@angular/core';
import { Emp } from '../Emp';
import { EmployeeService } from '../employee.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  emp: Emp = new Emp();
  empResult: any;
  empArray: Emp[] = [];
  accountNumber: string = '';
  constructor(private employeeService: EmployeeService) { }
  search() {
    const accountNumber = this.accountNumber;
    if (accountNumber) {
      if (accountNumber.trim()) {
        const promise = this.employeeService.getByAccountNumber(accountNumber);
        promise.subscribe(response => {
          this.empResult = response;
          if (this.empResult.length > 0) {
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

  withdraw() {
    if (Swal.fire("Are u sure you want to withdraw Rs:" + this.emp.withdrawAmount + "?")) {

      if (this.emp.balance >= this.emp.withdrawAmount) {

        this.emp.balance = this.emp.balance - this.emp.withdrawAmount;


        const promise = this.employeeService.updateAccount(this.emp, this.emp.id);
        promise.subscribe((response: any) => {
          console.log(response);
          this.empArray[response];

          Swal.fire("Rs: " + this.emp.withdrawAmount + "  is withdrawn");
          Swal.fire("Transaction Date")
        },
          error => {
            console.log(error);
            Swal.fire("Update not possible");
          })
      }
      else {
        Swal.fire("Enter an amount less than or equal to " + this.emp.balance);
      }
    }
    else {
      Swal.fire("Your transaction is Cancelled!!!");
    }

  }

  ngOnInit(): void {
  }

}
