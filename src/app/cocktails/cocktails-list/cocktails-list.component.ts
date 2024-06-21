import { Component, WritableSignal, effect, signal } from '@angular/core';

@Component({
  selector: 'app-cocktails-list',
  standalone: true,
  imports: [],
  templateUrl: './cocktails-list.component.html',
  styleUrl: './cocktails-list.component.scss'
})
export class CocktailsListComponent {
  cocktailsFavourites: WritableSignal<string[]> = signal([]);
  constructor(){
    effect(() => {
      localStorage.setItem("cocktailsFavourites", this.cocktailsFavourites());
    })
  }
}
