import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SingleRecipe} from '../models/single-recipe.model';

@Injectable({
  providedIn: 'root'
})

export class SingleRecipeService {

  constructor(private http: HttpClient) {}

  getRecipeById(recipeId: string) : Observable<SingleRecipe> {
    return this.http.get<SingleRecipe>(`http://localhost:8080/recipes/${recipeId}`);
  }

}



