import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalCommsAppComponent } from './internal-comms-app.component';

describe('InternalCommsAppComponent', () => {
  let component: InternalCommsAppComponent;
  let fixture: ComponentFixture<InternalCommsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalCommsAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalCommsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
