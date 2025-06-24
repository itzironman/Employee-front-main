import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { first } from 'rxjs';
import { IDepartment } from '../types/department';
import { IDesignation } from '../types/designation';
import { IEmployee, Master, salesMaster } from '../types/employee';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl = 'https://localhost:7272';

  constructor(private http: HttpClient) {

  }

  //Employee functions
  getEmployee() {
    return this.http.get(this.apiUrl + "/api/Employee/GetEmployee", { withCredentials: true }).pipe(first());
  }

  addEmployee(data: IEmployee) {
    return this.http.post(this.apiUrl + "/api/Employee/Save", data, { withCredentials: true }).pipe(first());
  }
  editEmployee(data: IEmployee) {
    return this.http.put(this.apiUrl + "/api/Employee/Update", data, { withCredentials: true }).pipe(first());
  }
  deleteEmployee(id: any) {
    return this.http.delete(this.apiUrl + `/api/Employee/Delete/${id}`, { withCredentials: true }).pipe(first());
  }

  //Department functions
  getDepartment() {
    return this.http.get(this.apiUrl + "/api/Department/GetDepartment", { withCredentials: true }).pipe(first());
  }

  addDepartment(data: IDepartment) {
    return this.http.post(this.apiUrl + "/api/Department/Save", data, { withCredentials: true }).pipe(first());
  }
  editDepartment(data: IDepartment) {
    return this.http.put(this.apiUrl + "/api/Department/Update", data, { withCredentials: true }).pipe(first());
  }
  deleteDepartment(id: any) {
  return this.http.delete(this.apiUrl + `/api/Department/Delete/${id}`, { withCredentials: true }).pipe(first());
  }

  //Designation functions
  getDesignation() {
    return this.http.get(this.apiUrl + "/api/Designation/Get", { withCredentials: true }).pipe(first());
  }

  addDesignation(data: IDesignation) {
    return this.http.post(this.apiUrl + "/api/Designation/Save", data, { withCredentials: true }).pipe(first());
  }
  editDesignation(data: IDesignation){
    return this.http.put(this.apiUrl + "/api/Designation/Update", data, { withCredentials: true }).pipe(first());
  }
  deleteDesignation(id: any){
    return this.http.delete(this.apiUrl + `/api/Designation/Delete/${id}`, { withCredentials: true }).pipe(first());
  }

  //Login functions
  Login(email: string, pass: string) {     //: Observable<any>    , body
    //const body = { email, password };
    return this.http.post<any>(this.apiUrl + '/api/User/Login?email=${email}&password=${pass}', { withCredentials: true }).pipe(first());
  }
  // getShiftEmpList(){
  //   return this.http.get(this.apiUrl + "", data, { withCredentials: true }).pipe(first());
  // }

  getShiftData(){
    return this.http.get(this.apiUrl + "/api/shift/GetShift", { withCredentials: true }).pipe(first());
  }

  saveShift(data: Master){
    return this.http.post(this.apiUrl + "/api/shiftEmployeeDetails/SaveShiftEmployeeDetails", data, { withCredentials: true }).pipe(first());
  }

  saveSales(data: salesMaster){
    return this.http.post(this.apiUrl + "/api/sales/SaveSales", data, { withCredentials: true }).pipe(first());
  }

  getSales(){
    return this.http.get(this.apiUrl + "/api/sales/GetSales", { withCredentials: true }).pipe(first());
  }
  deletesales(id: any){
    return this.http.delete(this.apiUrl + `/api/sales/deleteSales/${id}`, { withCredentials: true }).pipe(first());
  }

  editSales(data: salesMaster){
    return this.http.put(this.apiUrl + "/api/sales/updateSales", data, { withCredentials: true}).pipe(first());
  }

  // getDataById(id: any){
  //   return this.http.get(this.apiUrl + "", { withCredentials: true}).pipe.(first());
  // }
  getSkills(){
    return this.http.get(this.apiUrl + "/api/skills/GetAll", { withCredentials: true }).pipe(first());
  }

  getQualifications(){
    return this.http.get(this.apiUrl + "/api/qualification/Get", { withCredentials: true }).pipe(first());
  }
  getExp(){
    return this.http.get(this.apiUrl + "/api/experiences/Get", { withCredentials: true }).pipe(first());
  }
  getDuty(){
    return this.http.get(this.apiUrl + "/api/Duty/GetAllDuties", { withCredentials: true }).pipe(first());
  }
}
