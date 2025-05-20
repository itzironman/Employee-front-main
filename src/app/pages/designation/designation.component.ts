import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { IDesignation } from '../../types/designation';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent {
constructor(private httpService: HttpService){}
designation: any[] = [];
formData: IDesignation = new IDesignation();
isFormOpen = false;
ngOnInit(){
  this.getLatestData();
}

getLatestData(){
  this.httpService.getDesignation().subscribe((result: any) => {
    this.designation = result;
    
  });
}

addDesignation(){
  this.httpService.addDesignation(this.formData).subscribe({
    next: (result: any) => {
      console.log('Designation added:', result);
      this.isFormOpen = false;
      this.getLatestData();
    },
  })
}
}
