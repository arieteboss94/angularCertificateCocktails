import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cocktail } from '../cocktail.model';

@Component({
  selector: 'cocktails-tab',
  templateUrl: './cocktails-tab.component.html',
  styleUrl: './cocktails-tab.component.scss'
})
export class CocktailsTabComponent implements OnInit {
  @Input() cocktail: Cocktail;
  @Input() isFavourite: boolean;
  @Output() setFavourite: EventEmitter<boolean> = new EventEmitter<boolean>();
  cocktailIngredients: string;

  ngOnInit(): void {
    this.cocktailIngredients = this.cocktail.ingredients.join(", ");
  }

  onClickStar(): void{
    this.setFavourite.emit(!this.isFavourite);
  }
}
