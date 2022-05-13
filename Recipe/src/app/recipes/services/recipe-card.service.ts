import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {RecipeCard, Type} from '../models/recipe-card.model';

@Injectable({
  providedIn: 'root'
})

export class RecipeCardsService {

  constructor(private http: HttpClient) {}

  // getAllRecipeCard(): Observable<RecipeCard[]> {
  //   return this.http.get<RecipeCard[]>('http://localhost:8080/recipes');
  // }

  getRecipesByParameter(selectedCategory:string): Observable<RecipeCard[]> {
    let param1 = new HttpParams().set('type', selectedCategory != null ? selectedCategory : "");
    return this.http.get<RecipeCard[]>("http://localhost:8080/recipes", {params:param1});
  }

  getTypesRecipe(): Observable<Type[]> {
    return this.http.get<Type[]>('http://localhost:8080/types_recipe');
  }

}



