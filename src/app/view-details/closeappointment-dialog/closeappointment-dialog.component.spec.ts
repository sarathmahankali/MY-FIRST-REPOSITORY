import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseappointmentDialogComponent } from './closeappointment-dialog.component';

describe('CloseappointmentDialogComponent', () => {
  let component: CloseappointmentDialogComponent;
  let fixture: ComponentFixture<CloseappointmentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseappointmentDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloseappointmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
