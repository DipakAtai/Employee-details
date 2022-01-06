import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  baseURL = 'http://localhost:4090';

  constructor( private httpClient: HttpClient) { }

  // to add employee
  addEmployee(employee: Employee) {
    console.log(employee);
    return this.httpClient.post(`${this.baseURL}/add-employee`,employee);
  }
  // get all employee data
  getAllEmployee(){
    return this.httpClient.get(`${this.baseURL}/employee`);
  }
  // update a particular employee 
  updateEmployee(id:any,employee: Employee){
    return this.httpClient.put(`${this.baseURL}/update-employee/:${id}`,employee);
  }
  // delete a particular employee
  deleteEmployee(id:any){
    return this.httpClient.delete(`${this.baseURL}/employee/:${id}`);
  }
}
