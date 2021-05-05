import { Component, OnInit } from '@angular/core';
import {Emp} from '../Emp';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  emp:Emp = new Emp();
  constructor() {

   }

  ngOnInit(): void {
  }

}
