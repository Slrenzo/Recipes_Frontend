import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Recipe} from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})

export class SingleRecipeService {

  constructor(private http: HttpClient) {}

  getRecipeById(recipeId: string) : Observable<Recipe> {
    return this.http.get<Recipe>(`http://localhost:8080/recipes/${recipeId}`);
  }
}



