import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeServiceService) { }

  ngOnInit(): void {

  }

  addEmployeeData() {
    console.log(this.employee)
    this.employeeService.addEmployee(this.employee).subscribe(
      data=>{
        alert("Employee Data Insert Successfully");
      },
      error=>{
        alert("Sorry Unable to insert Employee Data");
      }
      )
  }

}
