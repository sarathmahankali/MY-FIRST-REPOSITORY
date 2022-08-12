import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetcardComponent } from './vetcard.component';

describe('VetcardComponent', () => {
  let component: VetcardComponent;
  let fixture: ComponentFixture<VetcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VetcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
