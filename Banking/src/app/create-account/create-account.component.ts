import { Component, OnInit } from '@angular/core';
import { Emp } from '../Emp';
import { Address } from '../Address';
import { EmployeeService } from '../employee.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  emp:Emp = new Emp();
  address:Address =new Address()
  constructor(private employeeservice: EmployeeService) { }
   save(){

    if (!this.emp.firstName.trim()) {
      Swal.fire("Please provide First name");
    }
    else if (!this.emp.lastName.trim()) {
      Swal.fire("Please provide Last Name");
    }
    else if (!this.emp.address.houseNumber.trim()) {
      Swal.fire("Please provide Address");
    }
    else if (!this.emp.address.city.trim()) {
      Swal.fire("Please provide City Name");
    }
    else if (!this.emp.address.state.trim()) {
      Swal.fire("Please provide State");
    }
    else if (!this.emp.address.pinCode.trim()) {
      Swal.fire("Please provide pincode");
    }
    else if (!this.emp.balance.trim()) {
      Swal.fire("Please provide Balance");
    }
    else if (!this.emp.accountNumber.trim()) {
      Swal.fire("Please provide Account Number");
    }

    else {
      this.emp.status = 'ACTIVE';

     const promise = this.employeeservice.save(this.emp);
      promise.subscribe(response => {
        Swal.fire({
          title: 'Make sure everything entered is correct..!!',
          showDenyButton: true,
          confirmButtonText: `Save Anyway..`,
          denyButtonText: `Let me Check..`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire('Bug Saved!', '', 'success')
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }
        })
      },
      error=> {
        console.log(error);
        alert('error hapenned..')
      })
    }
  }

  ngOnInit(): void {
  }

}
