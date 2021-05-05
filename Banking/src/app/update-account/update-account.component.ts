import { Component, OnInit } from '@angular/core';
import {Emp} from '../Emp';
import { Address } from '../Address';
@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {
  emp:Emp = new Emp();
  address:Address=new Address();
  constructor() { }

  ngOnInit(): void {
  }

}
