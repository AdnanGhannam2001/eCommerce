import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesItemComponent } from './features-item.component';

describe('FeaturesItemComponent', () => {
  let component: FeaturesItemComponent;
  let fixture: ComponentFixture<FeaturesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
