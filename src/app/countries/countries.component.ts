import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
title="servicing"
customers:any;
  constructor(private customer: CustomerService){
    
   this.customers=customer.users();
  }

  ngOnInit(): void {
  }

}
