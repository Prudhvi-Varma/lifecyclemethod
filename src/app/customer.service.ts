import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  static users(): any {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  users(){
    return[
      {Id:131,Name:'Prudhvi',Salary:4354,Gender:'Male',Email:'Prudhvi@gmail.com'},
      {Id:141,Name:'Vamsi',Salary:43455,Gender:'Male',Email:'vamsi@gmail.com'},
      {Id:151,Name:'Mahesh',Salary:435463,Gender:'Male',Email:'mahesh@gmail.com'},
      {Id:161,Name:'Phani',Salary:435634,Gender:'Male',Email:'Phani@gmail.com'},



    ]
  }

  
}
