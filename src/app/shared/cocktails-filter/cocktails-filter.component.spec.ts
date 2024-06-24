import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsFilterComponent } from './cocktails-filter.component';

describe('CocktailsFilterComponent', () => {
  let component: CocktailsFilterComponent;
  let fixture: ComponentFixture<CocktailsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailsFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CocktailsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
