import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { RecipeCard } from '../models/recipe-card.model';

@Injectable({
  providedIn: 'root'
})

export class RecipeCardsService {

  constructor(private http: HttpClient) {}

  getAllRecipeCard(): Observable<RecipeCard[]> {
    return this.http.get<RecipeCard[]>('http://localhost:8080/recipes');
  }

}



