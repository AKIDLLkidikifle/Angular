import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { CandidateComponent } from './candidate/candidate.component';
import { CompanyComponent }  from './company/company.component';
import { DepartmentComponent } from './department/department.component';
import { SalaryComponent } from './salary/salary.component';

const routes: Routes = [
  {path:'employee',component:EmployeeComponent},
  {path:'candidate',component:CandidateComponent},
  {path:'company',component:CompanyComponent},
  {path:'department',component:DepartmentComponent},
  {path:'salary',component:SalaryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
