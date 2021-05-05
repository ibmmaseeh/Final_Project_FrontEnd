import { Component, OnInit } from '@angular/core';
import {Emp} from '../Emp'
@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})
export class CustomerSearchComponent implements OnInit {
  empArray:Emp[]=[];
  accountNumber:string='';
  constructor() { }
search(){

}
  ngOnInit(): void {
  }

}
