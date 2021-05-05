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
  EmpResult: any;
  EmpArray: Emp[]=[];
  EmpArray1:any;
  accountNumber='';
  constructor(private employeeService:EmployeeService) { }
search(){
 // console.log('button')
  const accountNumber=this.accountNumber;
console.log(accountNumber);
//   if (accountNumber.trim()) {
//     const promise = this.employeeService.getByAccountNumber(accountNumber);
//     promise.subscribe(response => {
//       this.EmpResult = response;

//       if (this.EmpResult.length) {
//         this.EmpArray = this.EmpResult;
//       }
//       else {
//         alert("Record not found");
//         this.EmpArray=[];
//       }
//     },
//       error => {
//         alert('error happened..')
//       });
//   }

// }
if (accountNumber.trim()) {
  const promise = this.employeeService.getByAccountNumber(accountNumber);

  promise.subscribe(response => {
    this.EmpResult = response;
    this.EmpArray=this.EmpResult;
    if (this.EmpArray.length>0) {
      console.log(response);
      alert('Account found');
    }
    else {
      alert("Bug record with bug title not found");
    }
  },
    error => {
      alert('error happened..')
    });
}
}
getAccounts() {
  this.employeeService.getAll().subscribe(response => {
    this.EmpResult = response;
    console.log(response);
  },
    error => {
      console.log(error);
      alert(error.statusText);

    }
  )
 }
  ngOnInit(): void {
    this.getAccounts();
  }

}
