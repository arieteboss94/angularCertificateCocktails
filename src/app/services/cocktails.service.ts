import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from '../models/cocktail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  constructor(private http: HttpClient) { }

  getCocktails(): Observable<Cocktail[]>{
    return this.http.get<Cocktail[]>("cockails");
  }

  getCocktailsDetail(id: string): Observable<Cocktail>{
    return this.http.get<Cocktail>("cockails/"+id);
  }
}
