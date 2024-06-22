import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsTabComponent } from './cocktails-tab.component';

describe('CocktailsTabComponent', () => {
  let component: CocktailsTabComponent;
  let fixture: ComponentFixture<CocktailsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailsTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CocktailsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
