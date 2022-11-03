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

  getAllCompany(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiurl);
  }

  getCompanyById(id: any): Observable<Company> {
    return this.http.get<Company>(this.apiurl + '/' + id);
  }

  removeCompanyById(id: any) {
    return this.http.delete(this.apiurl + '/' + id);
  }

  createCompany(companydata: any) {
    return this.http.post(this.apiurl, companydata);
  }

  updateCompany(id: any, companydata: any) {
    return this.http.put(this.apiurl + '/' + id, companydata);
  }
}
