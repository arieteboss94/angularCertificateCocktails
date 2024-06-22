import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsNotFoundComponent } from './cocktails-not-found.component';

describe('CocktailsNotFoundComponent', () => {
  let component: CocktailsNotFoundComponent;
  let fixture: ComponentFixture<CocktailsNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailsNotFoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CocktailsNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
