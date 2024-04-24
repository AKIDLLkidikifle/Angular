import { Component } from '@angular/core';
import { MasterService } from '../service/master.service';
import { CompanyModel } from '../model/product.model';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {
  productlist!: CompanyModel[];
  datasource: any;
  editdata!: CompanyModel;
  displayedColums: string[] = ['id', 'name', 'department', 'salary', 'action']

  isadd = false;
  isedit = false;

  constructor(private serice: MasterService, private builder: FormBuilder) {
    this.loadproductlist();
  }
  title = 'xoca challenge';

  loadproductlist() {
    this.serice.getallcompany().subscribe(item => {
      this.productlist = item;
      this.datasource = new MatTableDataSource(this.productlist);
    });
  }

  productform = this.builder.group({
    id: this.builder.control({ value: 0, disabled: true }),
    name: this.builder.control('', Validators.required),
    address: this.builder.control(''),
    website: this.builder.control('')
  })
  Saveproduct() {
    if (this.productform.valid) {
      const _obj: CompanyModel = {
        id: this.productform.value.id as number,
        name: this.productform.value.name as string,
        address: this.productform.value.address as string,
        website: this.productform.value.website as string
      }
      if (this.isadd) {
        this.serice.Createcompany(_obj).subscribe(item => {
          this.loadproductlist();
          this.isadd = false;
          this.isedit = false;
          alert('Created successfully.')
        });
      }else{
        _obj.id=this.productform.getRawValue().id as number;
        this.serice.Updatecompany(_obj).subscribe(item => {
          this.loadproductlist();
          this.isadd = false;
          this.isedit = false;
          alert('Updated successfully.')
        });
      }
    }
  }

  editproduct(id: number) {
    this.serice.Getcompany(id).subscribe(item => {
      this.editdata = item;
      this.productform.setValue({ id: this.editdata.id, name: this.editdata.name, address: this.editdata.address, website: this.editdata.website });
      this.isedit = true;
    })
  }
  removeproduct(id: number){
    if(confirm('Confirm to remove?')){
      this.serice.Deletecompany(id).subscribe(item => {
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
