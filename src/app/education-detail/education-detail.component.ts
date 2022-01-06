import { Component, OnInit } from '@angular/core';
import { EmpEdu } from '../emp-edu';


@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.css']
})
export class EducationDetailComponent implements OnInit {

  empEdu: EmpEdu = new EmpEdu;

  constructor() { }

  ngOnInit(): void {
  }

  empEduDetail(){
    console.log(this.empEdu)
  }

}
