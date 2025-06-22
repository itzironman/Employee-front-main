import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { IEmployee, salesDetails, salesMaster, Shift } from '../../types/employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sales-log',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sales-log.component.html',
  styleUrl: './sales-log.component.css'
})
export class SalesLogComponent implements OnInit {

  formData: salesMaster = new salesMaster();
  data: salesMaster[] = [];
  shiftData: Shift[] = [];
  empData: IEmployee[] = [];
  entry: salesDetails = new salesDetails();
  shifts: salesMaster = new salesMaster();


  constructor(private dataService: HttpService, private route: Router,private router:ActivatedRoute){
      this.router.queryParamMap.subscribe(params => {
        if(params.get('id')){
         const value = params.get('id');
        //  this.getDataById(value)
        }

  });
  }

  ngOnInit(): void {
      this.getShift();
      this.dataService.getEmployee();
      this.getEmpData();
    }

  submitForm(){
    const mainData = this.formData;
    //debugger;
    this.dataService.saveSales(mainData).subscribe({
      next: (result: any) => {
        alert('Sales data recorded.');

        this.formData = new salesMaster();
      }
    })
  }

  addEntry(){
    if(this.entry.time && this.entry.salesName && this.entry.remarks) {
   
      // var times = this.entry.time as any;
      // var hours = times.split(':')[0];
      // var min = times.split(':')[1];
      // this.entry.time = {hours:Number(hours),minutes :Number(min)}
    
     this.entry.time = this.entry.time + ':00'
      this.formData.salesDetails.push({ ...this.entry });

      this.entry = new salesDetails();
    }
  }

  removeEntry(index: number){
    this.formData.salesDetails.splice(index, 1);
  }

  getShift(){
    this.dataService.getShiftData().subscribe((data: any) => {
      this.shiftData = data;
    })
  }

  getEmpData(){
    this.dataService.getEmployee().subscribe((data:any) => {
      this.empData = data;
    })
  }
  onList(){
    this.route.navigate(['/SalesList']);
  }
}
