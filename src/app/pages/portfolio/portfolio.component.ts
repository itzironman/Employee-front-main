import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { qualifications } from '../../types/department';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  constructor(private dataService: HttpService, private router: ActivatedRoute, private route: Router) {
    this.router.queryParamMap.subscribe((params: any) => {
      if (params.get('id')) {
        const value = params.get('id');
      }
    });
  }
  qualifications: any[] = [];
  exp: any[] = [];
  duty: any[] = [];
  FormData: qualifications = new qualifications();

  ngOnInit(): void {
    this.getLatestData();
    this.getQualifications();
    this.getExp();
  }
  getQualifications() {
    this.dataService.getQualifications().subscribe((data: any) => {
      debugger;
      this.qualifications = data;
    },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      })
  }
  getExp(){
    this.dataService.getExp().subscribe((data: any) => {
      this.exp = data;
    })
  }
  getDuty(){
    this.dataService.getDuty().subscribe((data: any) => {
      this.duty = data;
    })
  }

  getLatestData() {
    this.dataService.getQualifications().subscribe((result: any) => {
      this.qualifications = result.map((x: any, index: any) => ({
        ...x,
        serial: index + 1
      }));
    });
  }
}
