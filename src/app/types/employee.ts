import { Time } from "@angular/common";

export class IEmployee{
    Id: number = 0;
    Name: string = '';
    Email: string = '';
    Phone: string = '';
    Address: string = '';
    DesignationId: number = 0;
    DepartmentId: number = 0;
    DateOfJoining: Date = new Date();
    Salary: number = 0;
    Status: string = '';
}

export class Shift{
    id : number = 0;
    shiftName : string = ''
}


export class Master{
    details:Details[]=[];
    employeeId :number=0;
    shiftId :number =0

}
export class Details{
    time:string ='';
    customerName:string='';
    problem:string =''
}