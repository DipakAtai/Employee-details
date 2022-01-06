import { Component, OnInit } from '@angular/core';
import { EmpHistory } from '../emp-history';

@Component({
  selector: 'app-employeement-history',
  templateUrl: './employeement-history.component.html',
  styleUrls: ['./employeement-history.component.css']
})
export class EmployeementHistoryComponent implements OnInit {

  empHistory: EmpHistory = new EmpHistory;

  constructor() { }

  ngOnInit(): void {
  }

  empHistoryDetail() {
    console.log(this.empHistory)
  }

}
