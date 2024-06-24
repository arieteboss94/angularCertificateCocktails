import { Component, OnDestroy, OnInit, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import { CocktailsService } from '../../services/cocktails.service';
import { Subscription, retry } from 'rxjs';
import { Cocktail } from '../../models/cocktail.model';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-cocktails-list',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './cocktails-list.component.html',
  styleUrl: './cocktails-list.component.scss'
})
export class CocktailsListComponent implements OnInit, OnDestroy {
  
  private subs: Subscription = new Subscription();
  cocktails: Cocktail[];
  filteredCocktails: Cocktail[];

  constructor(private cocktailsService: CocktailsService){}

  ngOnInit(): void {
    this.subs.add(this.cocktailsService.getCocktails().pipe(retry(2)).subscribe((cockails: Cocktail[]) => {
      this.cocktails = cockails;
      this.filteredCocktails = cockails;
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

  filterCocktails(text: string): void{
    if (text){
      this.filteredCocktails = this.cocktails.filter((cocktail: Cocktail) => cocktail.name && cocktail.name.toLowerCase().indexOf(text.toLowerCase()) > -1);
    } else {
      this.filteredCocktails = this.cocktails;
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
