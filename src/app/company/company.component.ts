import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor() { }

  companydata!: Company[];

  ngOnInit(): void {
  }

  displayColumns: string[] = ["id", "name", "empcount", "revenue", "address", "isactive", "action"];

}
