import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../shared/api.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  editData: any;

  constructor(
    private formBuilder: FormBuilder,
    private matDialog: MatDialog,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if (this.data.id != '' && this.data.id != null) {
      this.apiService.getCompanyById(this.data.id).subscribe(response => {
        this.editData = response;
        this.companyform.setValue({
          id: this.editData.id,
          name: this.editData.name,
          empcount: this.editData.empcount,
          revenue: this.editData.revenue,
          address: this.editData.address,
          isactive: this.editData.isactive
        });
      });
    }
  }

  companyform = this.formBuilder.group({
    id: this.formBuilder.control({ value: '', disabled: true }),
    name: this.formBuilder.control('', Validators.required),
    empcount: this.formBuilder.control('', Validators.required),
    revenue: this.formBuilder.control('', Validators.required),
    address: this.formBuilder.control('', Validators.required),
    isactive: this.formBuilder.control(true)
  });

  saveCompany() {
    if (this.companyform.valid) {
      const editId = this.companyform.getRawValue().id;
      if (editId != '' && editId != null) {
        this.apiService.updateCompany(editId, this.companyform.getRawValue()).subscribe(response => {
          this.closePopup();
          alertify.success("Updated Successfully!")
        });
      } else {
        this.apiService.createCompany(this.companyform.value).subscribe(response => {
          this.closePopup();
          alertify.success("Saved Successfully!")
        });
      }
    }
  }

  closePopup() {
    this.matDialog.closeAll();
  }

}
