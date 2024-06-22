import { Component, OnDestroy, OnInit, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import { CocktailsService } from '../../services/cocktails.service';
import { Subscription } from 'rxjs';
import { Cocktail } from '../../models/cocktail.model';
import { CocktailsFilterComponent } from '../cocktails-filter/cocktails-filter.component';
import { CocktailsTabComponent } from '../cocktails-tab/cocktails-tab.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocktails-list',
  standalone: true,
  imports: [CommonModule, CocktailsFilterComponent, CocktailsTabComponent],
  templateUrl: './cocktails-list.component.html',
  styleUrl: './cocktails-list.component.scss'
})
export class CocktailsListComponent implements OnInit, OnDestroy {
  
  private subs: Subscription = new Subscription();
  cocktails: Cocktail[];
  filteredCocktails: Cocktail[];

  constructor(private cocktailsService: CocktailsService){}

  ngOnInit(): void {
    this.subs.add(this.cocktailsService.getCocktails().subscribe((data: Cocktail[]) => {
      this.cocktails = data;
      this.filteredCocktails = data;
    }))
  }

  setFavourite(id: string, favourite: boolean): void{
    if (favourite){
      this.cocktailsService.cocktailsFavourites.set([...this.cocktailsService.cocktailsFavourites(),id]);
    } else {
      this.cocktailsService.cocktailsFavourites.set(this.cocktailsService.cocktailsFavourites().filter((cocktailId: string) => cocktailId !== id));
    }
  }

  isFavourite(id: string): boolean{
    return this.cocktailsService.cocktailsFavourites().indexOf(id) > -1;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
