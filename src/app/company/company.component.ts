import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Company } from '../models/company';
import { PopupComponent } from '../popup/popup.component';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private matDialog: MatDialog, private apiService: ApiService) { }

  companydata!: Company[];

  ngOnInit(): void {
    this.loadCompany();
  }

  displayColumns: string[] = ["id", "name", "empcount", "revenue", "address", "isactive", "action"];

  openPopup(id: any) {
    const popup = this.matDialog.open(PopupComponent, {
      width: '500px',
      exitAnimationDuration: '1000ms',
      enterAnimationDuration: '1000ms',
      data: {
        id: id
      }
    })
    popup.afterClosed().subscribe(response => {
      this.loadCompany();
    });
  }

  loadCompany() {
    this.apiService.getAllCompany().subscribe(response => {
      this.companydata = response;
    });
  }

}
