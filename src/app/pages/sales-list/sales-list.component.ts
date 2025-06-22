import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { salesMaster } from '../../types/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales-list',
  standalone: true,
  imports: [],
  templateUrl: './sales-list.component.html',
  styleUrl: './sales-list.component.css'
})
export class SalesListComponent implements OnInit {

  salesList: any[] = [];
  formData: salesMaster = new salesMaster();

  constructor(private dataService: HttpService, private route: Router) { }
  ngOnInit() {
    this.getLatestData();
  }
  editSales(salesList: any) {
    this.route.navigate(['/SalesLog'],{queryParams:{id:salesList.id}});
    //salesList = 
    
 
  }

  // updateSales() {
  //   this.dataService.editSales(this.formData)
  //     .subscribe(() => {
  //       alert('Record Updated.');
  //     })
  // }
  // getLatestData(){
  //   this.dataService.getSales().subscribe((result: any) => {
  //     this.salesList = result.map(x=> ...);
  //   })
  // }

  getLatestData() {
    this.dataService.getSales().subscribe((result: any) => {
      this.salesList = result.map((x: any, index: any) => ({
        ...x,
        serial: index + 1
      }));
    });
  }

  back() {
    this.route.navigate(['/SalesLog']);
  }

  deleteSales(id: number) {
    debugger;
    if (confirm('Are you sure you want to delete this Sales instance?')) {
      this.dataService.deletesales(id)
        .subscribe(() => {
          alert('Record Deleted.');
          this.getLatestData();
        });
    }
  }
} 
