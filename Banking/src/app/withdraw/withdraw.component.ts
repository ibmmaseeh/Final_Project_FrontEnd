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
    if (confirm("Are u sure you want to withdraw Rs:" + this.emp.withdrawAmount + "?")) {

      if (this.emp.balance >= this.emp.withdrawAmount) {

        this.emp.balance = this.emp.balance - this.emp.withdrawAmount;


        const promise = this.employeeService.updateAccount(this.emp, this.emp.id);
        promise.subscribe((response: any) => {
          console.log(response);
          this.empArray[response];

          alert("Rs: " + this.emp.withdrawAmount + "  is withdrawn");
        },
          error => {
            console.log(error);
            alert("Update not possible");
          })
      }
      else {
        alert("Enter an amount less than or equal to " + this.emp.balance);
      }
    }
    else {
      alert("Your transaction is Cancelled!!!");
    }

  }

  ngOnInit(): void {
  }

}
