import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailsFilterComponent } from './cocktails-filter/cocktails-filter.component';
import { CocktailsTabComponent } from './cocktails-tab/cocktails-tab.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CocktailsPipe } from './cocktails.pipe';

@NgModule({
  declarations: [    
    CocktailsFilterComponent,
    CocktailsTabComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    CocktailsPipe
  ],
  exports: [
    CommonModule,
    CocktailsFilterComponent,
    CocktailsTabComponent
  ]
})
export class SharedModule { }
