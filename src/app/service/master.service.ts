import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeModel } from '../model/product.model';

import { CandidateModel } from '../model/product.model';
// import { CompanyModel } from '../model/product.model';
// import { DepartmentModel } from '../model/product.model';
// import { SalaryModel } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  private apiUrl = 'api/';
  private productsUrl = 'employees/';
  private candidatesUrl = 'candidates/';
  // private companysUrl = 'api/company/';
  // private departmentsUrl = 'api/department/';
  // private salaryUrl = 'api/salary/';  

  constructor(private http: HttpClient) { }

  getallproducts() {
    return this.http.get<EmployeeModel[]>(this.apiUrl + this.productsUrl);
  }

  Createproduct(inputdata: EmployeeModel) {
    return this.http.post(this.apiUrl + this.productsUrl, inputdata);
  }

  Updateproduct(inputdata: EmployeeModel) {
    return this.http.put(this.apiUrl + this.productsUrl+inputdata.id, inputdata);
  }

  Deleteproduct(productid: number) {
    return this.http.delete(this.apiUrl + this.productsUrl+productid);
  }

  Getproduct(productid: number) {
    return this.http.get<EmployeeModel>(this.apiUrl + this.productsUrl+productid);
  }


  getallcandidates(){
    return this.http.get<CandidateModel[]>(this.apiUrl + this.candidatesUrl);    
  }

  Createcandidate(inputdata: CandidateModel) {
    return this.http.post(this.apiUrl + this.candidatesUrl, inputdata);   
  }

  Updatecandidate(inputdata: CandidateModel){
    return this.http.put(this.apiUrl + this.candidatesUrl+inputdata.id, inputdata);    
  }

  Deletecandidate(candidateid: number) {
    return this.http.delete(this.apiUrl + this.candidatesUrl+candidateid);    
  }

  Getcandidate(candidateid: number) {
    return this.http.get<CandidateModel>(this.apiUrl + this.candidatesUrl+candidateid);  
  }

}
