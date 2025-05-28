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
  submitSave() {
    if (this.formData.Id == 0) {
      this.addDesignation();
    }
    else {
      this.updateDesig();
    }
  }

addDesignation(){
  this.httpService.addDesignation(this.formData).subscribe({
    next: (result: any) => {
      //console.log('Designation added:', result);
      alert('Record Saved.');
      this.isFormOpen = false;
      this.formData = new IDesignation();
      this.getLatestData();
    },
  })
}
isEdit = false;
editDesignation(designation: IDesignation){
  this.formData = designation;
  this.isFormOpen = true;
}

updateDesig(){
  debugger;
  this.httpService.editDesignation(this.formData)
  .subscribe(() => {
    alert('Record Updated.');
    this.isFormOpen = false;
    this.formData = new IDesignation();
    this.getLatestData();
    this.isEdit = false;
  })
}

deleteDesig(id: number){
  if(confirm('Are you sure you want to delete Designation?')){
    this.httpService.deleteDesignation(id)
    .subscribe(() => {
      alert('Record Deleted.');
      this.getLatestData();
    });
  }
}
}
