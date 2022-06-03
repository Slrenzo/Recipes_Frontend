import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Recipe, Type} from '../models/recipe-card.model';
import {RecipeRequest} from "../models/recipe.model";
import {Unit} from "../models/unit.model";

@Injectable({
  providedIn: 'root'
})

export class RecipeCardsService {

  constructor(private http: HttpClient) {}

  getRecipesByParameter(selectedtype:string, selectedName:string): Observable<Recipe[]> {
    let param = new HttpParams().set('type', selectedtype != null ? selectedtype : "")
                                .set('name', selectedName != null ? selectedName : "");
    return this.http.get<Recipe[]>("http://localhost:8080/recipes", {params:param});
  }

  getTypesRecipe(): Observable<Type[]> {
    return this.http.get<Type[]>('http://localhost:8080/types');
  }

  deleteIngredient(recipeId: string) {
    return this.http.delete(`http://localhost:8080/recipes/${recipeId}`);
  }

  putIngredient(recipeId: string, recipe: RecipeRequest): Observable<RecipeRequest> {
    return this.http.put<RecipeRequest>(`http://localhost:8080/recipes/${recipeId}`,recipe);
  }

  postIngredient(recipe: RecipeRequest): Observable<RecipeRequest> {
    return this.http.post<RecipeRequest>(`http://localhost:8080/recipes`,recipe);
  }

  getUnitsRecipe(): Observable<Unit[]> {
    return this.http.get<Type[]>('http://localhost:8080/units');
  }
}



