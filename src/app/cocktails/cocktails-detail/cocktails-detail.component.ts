import { Component, OnDestroy, OnInit } from '@angular/core';
import { CocktailsService } from '../../services/cocktails.service';
import { Subscription } from 'rxjs';
import { Cocktail } from '../../models/cocktail.model';
import { ActivatedRoute, Params, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocktails-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cocktails-detail.component.html',
  styleUrl: './cocktails-detail.component.scss'
})

export class CocktailsDetailComponent implements OnInit,OnDestroy {
  subs: Subscription = new Subscription();
  cocktail: Cocktail;
  isFavourite: boolean;

  constructor(private cocktailsService: CocktailsService, private router: ActivatedRoute){}

  ngOnInit(): void {
    this.subs.add(this.router.params.subscribe((params: Params)=>{
      this.subs.add(this.cocktailsService.getCocktail(params["cocktailid"]).subscribe((cocktail: Cocktail) => {
        this.cocktail = cocktail;
        this.isFavourite = this.cocktailsService.cocktailsFavourites().indexOf(this.cocktail.id) > -1;
      }))
    }))
  }

  setFavourite(): void{
    this.isFavourite = !this.isFavourite;
    if (this.isFavourite){
      this.cocktailsService.cocktailsFavourites.set([...this.cocktailsService.cocktailsFavourites(),this.cocktail.id]);
    } else {
      this.cocktailsService.cocktailsFavourites.set(this.cocktailsService.cocktailsFavourites().filter((cocktailId: string) => cocktailId !== this.cocktail.id));
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
