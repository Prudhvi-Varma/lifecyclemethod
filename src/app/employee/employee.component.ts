import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  customers:any;
  constructor(private customer: CustomerService){
    
   this.customers=customer.users();
  }
  ngOnInit(): void {
  }

}
