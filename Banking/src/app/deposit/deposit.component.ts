import { Component, OnInit } from '@angular/core';
import { Emp } from '../Emp';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  emp:Emp=new Emp();
  constructor() { }
  search(){

  }
  deposit(){

  }
  ngOnInit(): void {
  }

}
