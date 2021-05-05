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
  address: Address = new Address();
  empResult: any;
  empArray: Emp[] = [];
  accountNumber: string = '';
  constructor(private employeeService: EmployeeService) { }

  searchAccount() {
    let endpointURL = 'http://localhost:8080/employee/';
    let accountNumber = (<HTMLInputElement>document.getElementById('accountNumber')).value;
    console.log(accountNumber);
    if (accountNumber) {
      endpointURL = endpointURL + accountNumber;
      const promise = this.employeeService.getByAccountNumber(accountNumber);
      promise.subscribe(response => {
        this.empResult = response;
        // console.log(this.empResult);
        this.empArray = this.empResult;
        // console.log(this.bugArray);
        if (this.empArray){
          this.emp = this.empArray[0];
          console.log("1");
          alert(" success");


        }

        else {
          alert("Given Account with number " + accountNumber + " is not available ");
        }
      },
        error => {
          console.log(error);
          alert("Error Happened!");
        }
      )
    }
    else {
      alert("Specify Account Number to fetch Account details");

    }
  }


  updateAccount() {
    // let updateAccount= (<HTMLInputElement>document.getElementById('updateAccount'))
    // if (!updateAccount.checkValidity()) {
    //   alert('Form is Invalid! Please check whether all mandatory fields are filled!');
    //   return;
    // }
    let accountNumber = (<HTMLInputElement>document.getElementById('accountNumber')).value
    const updatedBody = {
      firstName: (<HTMLInputElement>document.getElementById('fname')).value,
      lastName: (<HTMLInputElement>document.getElementById('lname')).value,
      houseNumber: (<HTMLInputElement>document.getElementById('houseNumber')).value,
      city: (<HTMLInputElement>document.getElementById('city')).value,
      state: (<HTMLInputElement>document.getElementById('state')).value,
      pinCode: (<HTMLInputElement>document.getElementById('pincode')).value,
      type: (<HTMLInputElement>document.getElementById('type')).value,
      status: (<HTMLInputElement>document.getElementById('status')).value,
      balance: (<HTMLInputElement>document.getElementById('balance')).value,
      accountNumber: (<HTMLInputElement>document.getElementById('accountNumber')).value,
    }


    this.employeeService.updateAccount(accountNumber, updatedBody).subscribe(
      response => {
        console.log(response);
        this.empResult = response;
        console.log(response);
        console.log(updatedBody.status);
        alert('Account Details Updated');


      },
      error => {
        console.log(error);
        alert("Error Happened!");
      }
    )
  }












  ngOnInit(): void {
  }

}
