import { Routes } from '@angular/router';
import { CocktailsListComponent } from './cocktails/cocktails-list/cocktails-list.component';
import { CocktailsDetailComponent } from './cocktails/cocktails-detail/cocktails-detail.component';
import { CocktailsNotFoundComponent } from './cocktails/cocktails-not-found/cocktails-not-found.component';

export const routes: Routes = [
  {path: "cocktails", component: CocktailsListComponent},
  {path: "cocktails/:cocktailid", component: CocktailsDetailComponent},
  {path: '', redirectTo: "cocktails", pathMatch: "full"},
  {path: '**', component: CocktailsNotFoundComponent},
];