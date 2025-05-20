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
}

getLatestData(){
  this.httpService.getDepartment().subscribe((result: any) => {
    this.department = result;
  });
}
addDepartment(){
  debugger;
  this.httpService.addDepartment(this.formData).subscribe({
    next: (result: any) => {
      debugger;
      console.log('Department added:', result);
      this.isFormOpen = false;
      this.getLatestData();
    },
  })

}
}
