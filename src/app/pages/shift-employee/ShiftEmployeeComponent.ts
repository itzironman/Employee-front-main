import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpService } from '../../services/http.service';
import { IShiftEmployee } from './shift-employee.component';

@Component({
  selector: 'app-shift-employee',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, MatFormFieldModule, FormsModule],
  templateUrl: './shift-employee.component.html',
  styleUrl: './shift-employee.component.css'
})
export class ShiftEmployeeComponent {
  constructor(private httpService: HttpService) {
  }
  shiftEmployee: any[] = [];
  formData: IShiftEmployee = new IShiftEmployee();
  isFormOpen = false;
  searchTerm: string = '';
}
