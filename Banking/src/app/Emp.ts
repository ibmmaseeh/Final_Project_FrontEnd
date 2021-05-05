import { Address } from './Address';

export class Emp{
  id:any;
  firstName:string = '';
  lastName:string = '';
  address:Address=new Address;
  type:string = 'SAVINGS';
  status:string = 'ACTIVE';
  createdDate:Date = new Date();
  accountNumber:string='';
balance:any;
}
