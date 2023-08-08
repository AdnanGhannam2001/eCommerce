import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeDownComponent } from './time-down.component';

describe('TimeDownComponent', () => {
  let component: TimeDownComponent;
  let fixture: ComponentFixture<TimeDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeDownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
