import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
    showPassword: boolean = false;
    loginModel :any ={}
  constructor(private httpService:HttpService,private router:Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // OnSubmit(){
  //   this.httpService.Login(this.loginModel.email,this.loginModel.password).subscribe((data:any)=>{
  //     this.router.navigate(['/home']);
      
  //   })
  // }

  OnSubmit() {
  this.httpService.Login(this.loginModel.email, this.loginModel.password)
    .subscribe({
      next: (data: any) => {
        if (data.success) {  // or check if data.token exists
          // Login success
          this.router.navigate(['/home']);
        } else {
          alert('Invalid credentials'); // Show error
        }
      },
      error: (err) => {
        // Handle HTTP errors like 401 Unauthorized
        alert('Login failed: ' + err.error.message || 'Server error');
      }
    });
}

}
