import { Component, OnInit } from '@angular/core';
import {Emp} from '../Emp';
@Component({
  selector: 'app-search-account',
  templateUrl: './search-account.component.html',
  styleUrls: ['./search-account.component.css']
})
export class SearchAccountComponent implements OnInit {
  emp:Emp = new Emp();
  constructor() { }

  ngOnInit(): void {
  }

}
