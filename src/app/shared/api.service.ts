import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  apiurl = 'http://localhost:3000/company';

  GetAllCompany(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiurl);
  }

  CreateCompany(companydata: any) {
    return this.http.post(this.apiurl, companydata);
  }
}
