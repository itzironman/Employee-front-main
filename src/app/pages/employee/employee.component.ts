import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { IEmployee } from '../../types/employee';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, MatFormFieldModule, FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  constructor(private httpService: HttpService){
    
  }
  employee: any[] = [];
  formData: IEmployee = new IEmployee();
  isFormOpen = false;
  isFormEdit = false;
  searchTerm: string = '';
  originalEmployeeList: IEmployee[] = [];
  
  ngOnInit(){
    this.getLatestData();
  }
  
  getLatestData(){
    this.httpService.getEmployee().subscribe((result: any) => {
      this.employee = result;
      this.originalEmployeeList = result;
    });
  }
  addEmployee(){
    debugger;
    this.httpService.addEmployee(this.formData).subscribe({
      next: (result: any) => {
        console.log('Employee added:', result);
        this.isFormOpen = false;
        this.getLatestData();
      },
    })
  }
  searchEmployee(){
    const term = this.searchTerm.toLowerCase().trim();
    if(!term){
      this.employee = [...this.originalEmployeeList];
      return;
    }
    this.employee = this.originalEmployeeList.filter(emp =>
      emp.Name.toLowerCase().includes(term) || emp.Email.toLowerCase().includes(term)
    );
  }
  isEdit = false;
  editEmployee(employee: IEmployee){
    
  }
  // updateEmployee(){
  //   this.httpService.updateEmployee(this.editId, this.EmployeeName)
  //   .subscribe(() => {
  //     alert('Record Saved.');
  //     this.isFormOpen = false;
  //     this.getLatestData();
  //     this.editId = 0;
  //   })
  // }
}


