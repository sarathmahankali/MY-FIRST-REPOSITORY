import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptioncardComponent } from './prescriptioncard.component';

describe('PrescriptioncardComponent', () => {
  let component: PrescriptioncardComponent;
  let fixture: ComponentFixture<PrescriptioncardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptioncardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescriptioncardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
