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
    if(this.emp.firstName.length<=0){
      Swal.fire("Kindly fill details")
          }
          else if(!this.emp.depositAmount){
            Swal.fire("Kindly fill Amount")
          }
          else if(this.emp.status!="ACTIVE")

{
  Swal.fire("Account not Active")
}          else{
    var a:number=+this.emp.balance
      var b:number=+this.emp.depositAmount;
      a+=b;
      this.emp.balance=a;
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this transaction!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, deposit Rs. '+this.emp.depositAmount+''
      }).then((result) => {
        if (result.isConfirmed) {

const promise=this.employeeService.updateAccount(this.emp,this.emp.id)
promise.subscribe(response=>{


          Swal.fire(
            ( "Rs. "+ this.emp.depositAmount+" has been credited."),("Transaction Complete with ID "+(Math.floor(100000 + Math.random() * 900000))),
            'success'
            )
          }
)
        }  })
      }

    }


  ngOnInit(): void {
  }

}
