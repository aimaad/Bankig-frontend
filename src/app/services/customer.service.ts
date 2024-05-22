import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer.model";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
backendHost : String="http://localhost:8085";
  constructor(private http:HttpClient, authService : AuthService) { }

  public getCutomers():Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(this.backendHost+"/customers");
  }

  public searchCustomers(kw: any) {
    return this.http.get<Array<Customer>>(this.backendHost+"/customers/search?keyword="+kw);
  }

  public saveCustomer(customer:Customer):Observable<Customer> {
    return this.http.post<Customer>(this.backendHost+"/customers",customer);

  }

  public deleteCustomer(id:number) {
    return this.http.delete(this.backendHost+"/customers/"+id);

  }
}
