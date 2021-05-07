import { Component, OnInit } from '@angular/core';
import { Emp } from '../Emp';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
emp:Emp=new Emp();
  constructor() { }
  search(){

  }

  withdraw(){

  }

  ngOnInit(): void {
  }

}
