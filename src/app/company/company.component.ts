import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Company } from '../models/company';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  companydata!: Company[];

  ngOnInit(): void {
  }

  displayColumns: string[] = ["id", "name", "empcount", "revenue", "address", "isactive", "action"];

  OpenPopup(id: any) {
    this.matDialog.open(PopupComponent, {
      width: '500px',
      exitAnimationDuration: '1000ms',
      enterAnimationDuration: '1000ms',
      data: {}
    })
  }

}
