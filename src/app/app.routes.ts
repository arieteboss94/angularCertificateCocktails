import { Routes } from '@angular/router';
import { CocktailsListComponent } from './cocktails/cocktails-list/cocktails-list.component';
import { CocktailsDetailComponent } from './cocktails/cocktails-detail/cocktails-detail.component';

export const routes: Routes = [
  {path: "cocktails", component: CocktailsListComponent},
  {path: "cocktails/:cocktailId", component: CocktailsDetailComponent},
  {path: "**", component: CocktailsListComponent},
  {path: '', redirectTo: "cocktails", pathMatch: "full"},
];