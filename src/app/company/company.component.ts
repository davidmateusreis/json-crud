import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Company } from '../models/company';
import { PopupComponent } from '../popup/popup.component';
import { ApiService } from '../shared/api.service';
import * as alertify from 'alertifyjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private matDialog: MatDialog, private apiService: ApiService) { }

  @ViewChild(MatPaginator) _paginator!: MatPaginator;
  @ViewChild(MatSort) _sort!: MatSort;

  companydata!: Company[];
  finaldata!: any;

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
      this.finaldata = new MatTableDataSource<Company>(this.companydata);
      this.finaldata.paginator = this._paginator;
      this.finaldata.sort = this._sort;
    });
  }

  editCompany(id: any) {
    this.openPopup(id);
  }

  removeCompany(id: any) {
    alertify.confirm("Remove Company", "Do you want remove this company?", () => {
      this.apiService.removeCompanyById(id).subscribe(response => {
        this.loadCompany();
      });
    }, function () {

    })

  }

}
