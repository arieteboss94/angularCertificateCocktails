import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { Cocktail } from '../../models/cocktail.model';

@Component({
  selector: 'app-cocktails-tab',
  standalone: true,
  imports: [],
  templateUrl: './cocktails-tab.component.html',
  styleUrl: './cocktails-tab.component.scss'
})
export class CocktailsTabComponent implements OnInit {
  @Input() cocktail: Cocktail;
  @Input() isFavourite: boolean;
  @Output() setFavourite: EventEmitter<boolean> = new EventEmitter<boolean>();
  cocktailIngredients: string;
  ngOnInit(): void {
    this.cocktailIngredients = this.cocktail.ingredients.join(" | ");
  }

  onClickStar(): void{
    this.setFavourite.emit(!this.isFavourite);
  }
}
