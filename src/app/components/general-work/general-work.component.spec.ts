import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralWorkComponent } from './general-work.component';

describe('GeneralWorkComponent', () => {
  let component: GeneralWorkComponent;
  let fixture: ComponentFixture<GeneralWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
