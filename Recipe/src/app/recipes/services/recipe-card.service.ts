import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Recipe, Type} from '../models/recipe-card.model';

@Injectable({
  providedIn: 'root'
})

export class RecipeCardsService {

  constructor(private http: HttpClient) {}

  getRecipesByParameter(selectedCategory:string, selectedName:string): Observable<Recipe[]> {
    let param = new HttpParams().set('type', selectedCategory != null ? selectedCategory : "")
                                .set('name', selectedName != null ? selectedName : "");
    return this.http.get<Recipe[]>("http://localhost:8080/recipes", {params:param});
  }

  getTypesRecipe(): Observable<Type[]> {
    return this.http.get<Type[]>('http://localhost:8080/types');
  }
}



