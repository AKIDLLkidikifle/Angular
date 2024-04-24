import { Component } from '@angular/core';
import { MasterService } from '../service/master.service';
import { SalaryModel } from '../model/product.model';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrl: './salary.component.css'
})
export class SalaryComponent {
  productlist!: SalaryModel[];
  datasource: any;
  editdata!: SalaryModel;
  displayedColums: string[] = ['id',  'salary', 'action']

  isadd = false;
  isedit = false;

  constructor(private serice: MasterService, private builder: FormBuilder) {
    this.loadproductlist();
  }
  title = 'xoca challenge';

  loadproductlist() {
    this.serice.getallsalary().subscribe(item => {
      this.productlist = item;
      this.datasource = new MatTableDataSource(this.productlist);
    });
  }

  productform = this.builder.group({
    id: this.builder.control({ value: 0, disabled: true }),
    salary: this.builder.control(0)
  })
  Saveproduct() {
    if (this.productform.valid) {
      const _obj: SalaryModel = {
        id: this.productform.value.id as number,
        amount: this.productform.value.salary as number
      }
      if (this.isadd) {
        this.serice.Createsalary(_obj).subscribe(item => {
          this.loadproductlist();
          this.isadd = false;
          this.isedit = false;
          alert('Created successfully.')
        });
      }else{
        _obj.id=this.productform.getRawValue().id as number;
        this.serice.Updatesalary(_obj).subscribe(item => {
          this.loadproductlist();
          this.isadd = false;
          this.isedit = false;
          alert('Updated successfully.')
        });
      }
    }
  }

  editproduct(id: number) {
    this.serice.Getsalary(id).subscribe(item => {
      this.editdata = item;
      this.productform.setValue({ id: this.editdata.id,  salary: this.editdata.amount });
      this.isedit = true;
    })
  }
  removeproduct(id: number){
    if(confirm('Confirm to remove?')){
      this.serice.Deletesalary(id).subscribe(item => {
        this.loadproductlist();
      })
    }
    
  }

  addproduct() {
    this.productform.reset();
    this.isadd = true;
    this.isedit = false;
  }
  backtolist() {
    this.isadd = false;
    this.isedit = false;
  }

}
