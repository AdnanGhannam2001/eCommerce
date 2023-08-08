import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTabViewComponent } from './product-tab-view.component';

describe('ProductTabViewComponent', () => {
  let component: ProductTabViewComponent;
  let fixture: ComponentFixture<ProductTabViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTabViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTabViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
