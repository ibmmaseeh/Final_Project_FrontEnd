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
    if(this.emp.firstName.length<=0){
Swal.fire("Kindly fill details")
    }
    else if(!this.emp.withdrawAmount){
      Swal.fire("Kindly fill Amount")
    }
    else{
    if (this.emp.balance < this.emp.withdrawAmount){

        Swal.fire("Enter an amount less than or equal to " + this.emp.balance);
      }
    else{
    Swal.fire({
      title: 'Are you sure?',
      text: "Amount Rs. "+this.emp.withdrawAmount+" will be debited!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, withdraw it!'
    }).then((result) => {
      if (result.isConfirmed) {

        if (this.emp.balance >= this.emp.withdrawAmount) {

          this.emp.balance = this.emp.balance - this.emp.withdrawAmount;


          const promise = this.employeeService.updateAccount(this.emp, this.emp.id);
          promise.subscribe((response: any) => {
            console.log(response);
            this.empArray[response];



          },
            error => {
              console.log(error);
              Swal.fire("Update not possible");
            })
        }



        Swal.fire(
          ( "Rs. "+ this.emp.withdrawAmount+" has been debited. Remaining balance is Rs. "+this.emp.balance),("Transaction Complete with ID "+(Math.floor(100000 + Math.random() * 900000))),
            'success'
            )
      }
    })
  }
  }

  }
  ngOnInit(): void {
  }

}
