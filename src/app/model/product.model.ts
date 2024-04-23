export interface EmployeeModel{
    id:number;
    name:string;
    department:string;
    salary:number
}

export interface CandidateModel {
    id: number;
    name: string;
    departmentId: number;
    companyId: number;
}

// // company.model.ts
// export interface CompanyModel {
//     id: number;
//     name: string;
//     address: string;
//     website: string;
// }

// department.model.ts
// export interface DepartmentModel {
//     id: number;
//     name: string;
//   }
  
  // salary.model.ts
//   export interface SalaryModel {
//     id: number;
//     amount: number;
//   }