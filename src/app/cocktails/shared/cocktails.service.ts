import { Injectable, WritableSignal, effect, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from '../shared/cocktail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {
  cocktailsFavourites: WritableSignal<string[]> = signal(localStorage.getItem("cocktailsFavourites")?.split("|") ?? []);

  constructor(private http: HttpClient) {
    effect(() => {
      const cocktailsIdstring = this.cocktailsFavourites().join("|")
      localStorage.setItem("cocktailsFavourites", cocktailsIdstring);
    })
  }

  getCocktails(): Observable<Cocktail[]>{
    return this.http.get<Cocktail[]>("cockails");
  }

  getCocktail(id: string): Observable<Cocktail>{
    return this.http.get<Cocktail>("cockails/"+id);
  }
}
