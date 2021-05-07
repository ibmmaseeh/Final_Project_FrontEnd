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
    else if (100000>(this.emp.address.pinCode)&&(this.emp.address.pinCode)<999999) {
      Swal.fire("Please provide valid pincode");
    }
    else if (this.emp.balance<0) {
      Swal.fire("Please provide Balance");
    }
  //   else if ((this.emp.accountNumber.length<999999) && (this.emp.accountNumber.length>10000000) ){
  //     Swal.fire("Please provide 7 Digit  Account Number ");

  // }

    else {
      this.emp.status = 'ACTIVE';
      Swal.fire({
        title: 'Make sure everything entered is correct..!!',
        showDenyButton: true,
        confirmButtonText: `Save Anyway..`,
        denyButtonText: `Let me Check..`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {




     const promise = this.employeeservice.save(this.emp);

      promise.subscribe(response => {
        Swal.fire('Account Created!!', '', 'success')
      },
      error=> {
        console.log(error);
        alert('error hapenned..')
      })
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })


    }
  }

  ngOnInit(): void {
  }

}
