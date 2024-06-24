import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsDetailComponent } from './cocktails-detail.component';
import { provideRouter } from '@angular/router';

describe('CocktailsDetailComponent', () => {
  let component: CocktailsDetailComponent;
  let fixture: ComponentFixture<CocktailsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailsDetailComponent],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CocktailsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
