import { Routes } from '@angular/router';
import { EmployeeComponent } from './pages/employee/employee.component';
import { HomeComponent } from './pages/home/home.component';
import { DepartmentComponent } from './pages/department/department.component';
import { DesignationComponent } from './pages/designation/designation.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path:'login',
        component:LoginComponent,
    },
    {
        path:'',
        component:LayoutComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path:'employee',
                component:EmployeeComponent,
            },
            {
                path:'department',
                component:DepartmentComponent,
            },
            {
                path:'designation',
                component:DesignationComponent,
            }
        ]
    }
    
];
