import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellarUpdateProductComponent } from './sellar-update-product.component';

describe('SellarUpdateProductComponent', () => {
  let component: SellarUpdateProductComponent;
  let fixture: ComponentFixture<SellarUpdateProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellarUpdateProductComponent]
    });
    fixture = TestBed.createComponent(SellarUpdateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
