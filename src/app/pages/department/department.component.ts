import { Component, inject } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { IDepartment } from '../../types/department';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
  constructor(private httpService:HttpService){}
  department: any[] = [];
  formData : IDepartment = new IDepartment();
  isFormOpen = false;
  ngOnInit(){
  this.getLatestData();
  //originalDepartmentList: IDepartment[] = [];
}

getLatestData(){
  this.httpService.getDepartment().subscribe((result: any) => {
    this.department = result.map((x:any, index:any) => ({
  ...x,
  serial: index + 1
}));
  });
}
addDepartment(){
  debugger;
  this.httpService.addDepartment(this.formData).subscribe({
    next: (result: any) => {
      debugger;
      alert('Department added.');
      //console.log('Department added:', result);
      this.isFormOpen = false;
      this.formData = new IDepartment();
      this.getLatestData();
    },
  })
}
  submitSave(){
  if(this.formData.id == 0){
  this.addDepartment();
  }
  else{
this.updateDept();
  }
}
  isEdit = false;
  editDepartment(department: IDepartment){
    this.formData = department;
    this.isFormOpen = true;
  }
  updateDept(){
    this.httpService.editDepartment(this.formData)
    .subscribe(() => {
      alert('Record Updated.');
      this.isFormOpen = false;
      this.getLatestData();
      this.isEdit = false;
    });
  }
  deleteDept(id: number) {
    debugger;
  if (confirm('Are you sure you want to delete this department?')) {
    this.httpService.deleteDepartment(id)
      .subscribe(() => {
        debugger;
        alert('Record Deleted.');
        this.getLatestData(); // Refresh the data list
      });
  }
}

}