import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { Details, IEmployee, Master, Shift } from '../../types/employee';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-shift-employee',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, MatFormFieldModule, FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './shift-employee.component.html',
  styleUrl: './shift-employee.component.css'
})
export class ShiftEmployeeComponent implements OnInit {
  formData : Master = new Master();

  data: Master[] = [];
  shiftData : Shift[] = [];
  //shiftData = this.dataService.getShiftData();
  empData : IEmployee[] = [];
  
  entry :Details = new Details();


  shifts : Master = new Master();
 
  constructor(private dataService : HttpService) {}
  ngOnInit(): void {
    this.getShift();
    this.dataService.getEmployee();
    this.getEmpData();
  }

  addEntry() {
    if (this.entry.time && this.entry.customerName && this.entry.problem) {
      this.formData.details.push({ ...this.entry });

      this.entry = new Details();
    }
  }

  getShift(){
    this.dataService.getShiftData().subscribe((data:any) => {
      this.shiftData = data;
    })
  }

  getEmpData(){
    this.dataService.getEmployee().subscribe((data:any) => {
      this.empData = data;
    });
  }

  removeEntry(index: number) {
    this.formData.details.splice(index, 1);
  }

  submitForm() {
    const mainData = this.formData;
  debugger;
    this.dataService.saveShift(mainData).subscribe({
        next: (result: any) => {
          
          alert('Shift Employee Data added.');
          //console.log('Department added:', result);
         
          this.formData = new Master();
          
        },
      })


    // this.dataService.post('https://localhost:7272/api/shiftEmployeeDetails/SaveShiftEmployeeDetails', this.formData).subscribe({
    //   next: () => {
    //     alert('Submitted successfully!');
    //     this.entries =[];
    //     this.formData = new Master();
    //   },
    //   error: () => {
    //     alert('Submission failed.');
    //   }
    // });
  }
 
}