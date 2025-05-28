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

submitSave(){
  if(this.formData.Id == 0){
this.addEmployee();
  }
  else{
this.updateEmp();
  }
}

  addEmployee(){
    this.httpService.addEmployee(this.formData).subscribe({
      next: (result: any) => {
        //console.log('Employee added:', result);
        alert('Record Saved.');
        this.isFormOpen = false;
        this.formData = new IEmployee();
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
    this.formData = employee;
    this.isFormOpen = true;
    
  }

updateEmp(){
  this.httpService.editEmployee(this.formData)
    .subscribe(() => {
      alert('Record Updated.');
      this.isFormOpen = false;
      this.formData = new IEmployee();
      this.getLatestData();
      this.isEdit = false;
      
    });
}
deleteEmp(id: number){
  if(confirm('Are you sure you want to delete this Employee?')){
    this.httpService.deleteEmployee(id)
      .subscribe(() => {
        alert('Record Deleted.');
        this.getLatestData();
      });
  }
}

}


