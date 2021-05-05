import { Component, OnInit } from '@angular/core';
import {Emp} from '../Emp';
@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {
  emp:Emp = new Emp();
  constructor() { }

  ngOnInit(): void {
  }

}
