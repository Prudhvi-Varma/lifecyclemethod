import { Component } from '@angular/core';
import { CustomerService } from './customer.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services';
  customers:any;
  constructor(private customer: CustomerService){
    
   this.customers=customer.users();
  }
}
