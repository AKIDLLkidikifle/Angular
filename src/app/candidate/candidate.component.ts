import { Component } from '@angular/core';
import { MasterService } from '../service/master.service';
import { CandidateModel } from '../model/product.model';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrl: './candidate.component.css'
})
export class CandidateComponent {
  productlist!: CandidateModel[];
  datasource: any;
  editdata!: CandidateModel;
  displayedColums: string[] = ['id', 'name', 'department', 'salary', 'action']

  isadd = false;
  isedit = false;

  constructor(private serice: MasterService, private builder: FormBuilder) {
    this.loadproductlist();
  }
  title = 'xoca challenge';

  loadproductlist() {
    this.serice.getallcandidates().subscribe(item => {
      this.productlist = item;
      this.datasource = new MatTableDataSource(this.productlist);
    });
  }

  productform = this.builder.group({
    id: this.builder.control({ value: 0, disabled: true }),
    name: this.builder.control('', Validators.required),
    departmentId: this.builder.control(0),
    companyId: this.builder.control(0)
  })
  Saveproduct() {
    if (this.productform.valid) {
      const _obj: CandidateModel = {
        id: this.productform.value.id as number,
        name: this.productform.value.name as string,
        departmentId: this.productform.value.departmentId as number,
        companyId: this.productform.value.companyId as number
      }
      if (this.isadd) {
        this.serice.Createcandidate(_obj).subscribe(item => {
          this.loadproductlist();
          this.isadd = false;
          this.isedit = false;
          alert('Created successfully.')
        });
      }else{
        _obj.id=this.productform.getRawValue().id as number;
        this.serice.Updatecandidate(_obj).subscribe(item => {
          this.loadproductlist();
          this.isadd = false;
          this.isedit = false;
          alert('Updated successfully.')
        });
      }
    }
  }

  editproduct(id: number) {
    this.serice.Getcandidate(id).subscribe(item => {
      this.editdata = item;
      this.productform.setValue({ id: this.editdata.id, name: this.editdata.name, departmentId: this.editdata.departmentId, companyId: this.editdata.companyId });
      this.isedit = true;
    })
  }
  removeproduct(id: number){
    if(confirm('Confirm to remove?')){
      this.serice.Deletecandidate(id).subscribe(item => {
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
