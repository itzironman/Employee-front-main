import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { first } from 'rxjs';
import { IDepartment } from '../types/department';
import { IDesignation } from '../types/designation';
import { IEmployee } from '../types/employee';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl = 'https://localhost:7272';
  constructor(
    private http: HttpClient
  ) {

  }

  getEmployee() {
    return this.http.get(this.apiUrl + "/api/Employee/GetEmployee", { withCredentials: true }).pipe(first());
  }

  addEmployee(data: IEmployee) {
    return this.http.post(this.apiUrl + "/api/Employee/Save", data, { withCredentials: true }).pipe(first());
  }

  getDepartment() {
    return this.http.get(this.apiUrl + "/api/Department/GetDepartment", { withCredentials: true }).pipe(first());
  }

  addDepartment(data: IDepartment) {
    return this.http.post(this.apiUrl + "/api/Department/Save", data, { withCredentials: true }).pipe(first());
  }

  getDesignation() {
    return this.http.get(this.apiUrl + "/api/Designation/Get", { withCredentials: true }).pipe(first());
  }

  addDesignation(data: IDesignation) {
    return this.http.post(this.apiUrl + "/api/Designation/Save", data, { withCredentials: true }).pipe(first());
  }

  Login(email: string, pass: string) {     //: Observable<any>    , body
    //const body = { email, password };
    return this.http.post<any>(this.apiUrl + '/api/User/Login?email=${email}&password=${pass}', { withCredentials: true }).pipe(first());
  }
  editEmployee(data: IEmployee) {
    return this.http.put(this.apiUrl + "/api/Employee/Update", data, { withCredentials: true }).pipe(first());
  }
  editDepartment(data: IDepartment) {
    return this.http.put(this.apiUrl + "/api/Department/Update", data, { withCredentials: true }).pipe(first());
  }
  deleteDepartment(id: any) {
  return this.http.delete(this.apiUrl + `/api/Department/Delete/${id}`, { withCredentials: true }).pipe(first());
  }

}
