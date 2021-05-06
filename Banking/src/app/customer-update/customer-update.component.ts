import { Component, OnInit } from '@angular/core';
import { Emp } from '../Emp';
import { Address } from '../Address';
import { EmployeeService } from '../employee.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-update-account',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
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



      const promise = this.employeeService.updateCustomer(this.emp, this.emp.id);
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

  ngOnInit(): void {
  }

}

