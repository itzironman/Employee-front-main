import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftEmployeeComponent } from './ShiftEmployeeComponent';

describe('ShiftEmployeeComponent', () => {
  let component: ShiftEmployeeComponent;
  let fixture: ComponentFixture<ShiftEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShiftEmployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShiftEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
