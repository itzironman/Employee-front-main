import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { IEmployee, salesDetails, salesMaster, Shift } from '../../types/employee';

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


  constructor(private dataService: HttpService){
    
  }

  ngOnInit(){
      
    }

  submitForm(){

  }

  addEntry(){

  }

  removeEntry(){
    
  }
}
