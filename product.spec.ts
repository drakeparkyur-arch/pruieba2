import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Product } from './product';

describe('Product', () => {
  let fixture: ComponentFixture<Product>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Product);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
