import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EducationDetailComponent } from './education-detail/education-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeementHistoryComponent } from './employeement-history/employeement-history.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';

const routes: Routes = [

  {path:'employees', component: EmployeeListComponent},
  {path:'addEmployee', component: CreateEmployeeComponent},
  {path: 'addEmployee/education-detail', component: EducationDetailComponent},
  {path: 'addEmployee/education-detail/employeement-history', component: EmployeementHistoryComponent},
  {path: 'personal-detail', component: PersonalDetailComponent},
  // {path: '**', redirectTo: 'employees', pathMatch: 'full'}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
