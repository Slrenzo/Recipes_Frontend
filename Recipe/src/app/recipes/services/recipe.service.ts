import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RecipeRequest, SingleRecipe} from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  constructor(private http: HttpClient) {}

  getRecipeById(recipeId: string) : Observable<SingleRecipe> {
    return this.http.get<SingleRecipe>(`http://localhost:8080/recipes/${recipeId}`);
  }

  deleteRecipe(recipeId: string) {
    return this.http.delete(`http://localhost:8080/recipes/${recipeId}`);
  }

  postRecipe(Recipe: RecipeRequest): Observable<RecipeRequest> {
    return this.http.post<RecipeRequest>(`http://localhost:8080/recipes`,Recipe);
  }

}



