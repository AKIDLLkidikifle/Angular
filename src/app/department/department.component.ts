import { Component } from '@angular/core';
import { MasterService } from '../service/master.service';
import { DepartmentModel } from '../model/product.model';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
  productlist!: DepartmentModel[];
  datasource: any;
  editdata!: DepartmentModel;
  displayedColums: string[] = ['id', 'name', 'action']

  isadd = false;
  isedit = false;

  constructor(private serice: MasterService, private builder: FormBuilder) {
    this.loadproductlist();
  }
  title = 'xoca challenge';

  loadproductlist() {
    this.serice.getalldepartment().subscribe(item => {
      this.productlist = item;
      this.datasource = new MatTableDataSource(this.productlist);
    });
  }

  productform = this.builder.group({
    id: this.builder.control({ value: 0, disabled: true }),
    name: this.builder.control('', Validators.required)
    // department: this.builder.control(''),
    // salary: this.builder.control(0)
  })
  Saveproduct() {
    if (this.productform.valid) {
      const _obj: DepartmentModel = {
        id: this.productform.value.id as number,
        name: this.productform.value.name as string,
        // department: this.productform.value.department as string,
        // salary: this.productform.value.salary as number
      }
      if (this.isadd) {
        this.serice.Createdepartment(_obj).subscribe(item => {
          this.loadproductlist();
          this.isadd = false;
          this.isedit = false;
          alert('Created successfully.')
        });
      }else{
        _obj.id=this.productform.getRawValue().id as number;
        this.serice.Updatedepartment(_obj).subscribe(item => {
          this.loadproductlist();
          this.isadd = false;
          this.isedit = false;
          alert('Updated successfully.')
        });
      }
    }
  }

  editproduct(id: number) {
    this.serice.Getdepartment(id).subscribe(item => {
      this.editdata = item;
      this.productform.setValue({ id: this.editdata.id, name: this.editdata.name });
      this.isedit = true;
    })
  }
  removeproduct(id: number){
    if(confirm('Confirm to remove?')){
      this.serice.Deletedepartment(id).subscribe(item => {
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
