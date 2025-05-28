import { Time } from "@angular/common";

export class IShiftEmployee{
  Id: number = 0;
  shiftId: number = 0;
  employeeId: number = 0;

  shiftEmployeeId: number = 0;
  time: Time = { hours: 0, minutes: 0 };
  customerName: string = '';
  problem: string = '';
}
