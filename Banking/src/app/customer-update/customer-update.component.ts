import { Component, OnInit } from '@angular/core';
import { Emp } from '../Emp';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
emp:Emp=new Emp();
accNumber:string='';
  constructor() { }
searchAccount(){

}

updateAcc(){

}
  ngOnInit(): void {
  }

}
