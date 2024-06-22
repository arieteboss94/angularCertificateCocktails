import { Component, OnInit, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
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
export class CocktailsListComponent implements OnInit {
  cocktailsFavourites: WritableSignal<string[]> = signal(localStorage.getItem("cocktailsFavourites")?.split("|") ?? []);
  private subs: Subscription = new Subscription();
  cocktails: Cocktail[];
  filteredCocktails: Cocktail[];
  constructor(private cocktailsService: CocktailsService){
    effect(() => {
      const cocktailsIdString = this.cocktailsFavourites().join("|")
      localStorage.setItem("cocktailsFavourites", cocktailsIdString);
    })
  }
  ngOnInit(): void {
    this.subs.add(this.cocktailsService.getCocktails().subscribe((data: Cocktail[]) => {
      this.cocktails = data;
      this.filteredCocktails = data;
    }))

    this.subs.add(this.cocktailsService.getCocktailsDetail("12560").subscribe((data: Cocktail) => {
      console.log(data);
    }))
  }
  setFavourite(id: string, favourite: boolean): void{
    if (favourite){
      this.cocktailsFavourites.set([...this.cocktailsFavourites(),id]);
    } else {
      this.cocktailsFavourites.set(this.cocktailsFavourites().filter((cocktailId: string) => cocktailId !== id));
    }
  }
}
