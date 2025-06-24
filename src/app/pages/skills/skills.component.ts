import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { skills } from '../../types/skills';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  constructor(private dataService: HttpService, private router: ActivatedRoute, private route: Router) { 
    this.router.queryParamMap.subscribe((params: any) => {
      if(params.get('id')){
        const value = params.get('id');
      }
    });

  }

  skills: any[] = [];
  FormData: skills = new skills();

  editSkills(skills: any){
    this.route.navigate(['/skills'], {queryParams:{id:skills.id}});
  }
  deleteSkills(id: number){

  }
  // back(){
  //   this.route.navigate(['/layout']);
  // }

  ngOnInit(): void{
    this.getLatestData();
  }
  getSkills(){
    this.dataService.getSkills().subscribe((data:any)=>{
    this.skills = data;
    },
    (err:HttpErrorResponse)=>{
      console.log(err.message);
    })
  }

  getLatestData() {
    this.dataService.getSkills().subscribe((result: any) => {
      this.skills = result.map((x: any, index: any) => ({
        ...x,
        serial: index + 1
      }));
    });
  }
  addSkills(){
    
  }
}
