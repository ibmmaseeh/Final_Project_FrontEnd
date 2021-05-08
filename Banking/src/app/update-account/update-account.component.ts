import { Component, OnInit } from '@angular/core';
import { Emp } from '../Emp';
import { Address } from '../Address';
import { EmployeeService } from '../employee.service';
import Swal from 'sweetalert2'
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
  updateAcc() {
    var letters ="/^[A-Za-z]+$/";
    if (this.emp.accountNumber.length<7)  {
      Swal.fire("Please provide 7 Digit  Account Number ");
  }
  else  if (!this.emp.firstName.trim()) {
      Swal.fire("Please provide First name");
    }
    else if (!this.emp.lastName.trim()) {
      Swal.fire("Please provide Last Name");
    }
    else if (!this.emp.address.houseNumber.trim()) {
      Swal.fire("Please provide Address");
    }
    else if (!this.emp.address.city.trim()) {
      Swal.fire("Please provide City");
    }
    else if (!this.emp.address.state.trim()) {
      Swal.fire("Please provide State");
    }
    else if(!this.emp.email.trim()){
      Swal.fire("Please provide Email")
    }
    else if (this.emp.address.pinCode<6) {
      Swal.fire("Please provide 6 digit pincode");
    }
    else if (this.emp.balance<0) {
      Swal.fire("Please provide Balance");
    }
  else if(this.emp.mobileNumber.length<10){
    Swal.fire("Please provide valid phone number")
  }
else{
      const promise = this.employeeService.updateAccount(this.emp, this.emp.id);
      promise.subscribe(response => {

        // alert('Account Updated..')
        Swal.fire({
          title: 'Are you sure you want to save the changes?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Yes, Save it',
          // cancelButtonText: 'Cancel',
        }).then((result) => {
          if (result.isConfirmed) {
            //if Yes is pressed
            Swal.fire('Updated', 'Changes Saved successfully!', 'success');
          } else if (result.isDenied) {
            //if No is pressed
            Swal.fire('Cancelled', 'Changes are not Saved', 'error');
          }
        });
      },
        error => {

              alert("Error occurred");

        })
    }
  }
  ngOnInit(): void {
  }

}
