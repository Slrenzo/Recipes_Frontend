import { Injectable } from '@angular/core';
import {Category, IngredientCard} from "../models/ingredient-card.model";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class IngredientCardsService {

  constructor(private http: HttpClient) {}

  // getAllIngredientCard(): Observable<IngredientCard[]> {
  //   return this.http.get<IngredientCard[]>('http://localhost:8080/ingredients');
  // }

  getIngredientsByParameter(selectedCategory:string): Observable<IngredientCard[]> {
    let param1 = new HttpParams().set('category', selectedCategory != null ? selectedCategory : "");
    return this.http.get<IngredientCard[]>("http://localhost:8080/ingredients", {params:param1});
  }

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:8080/categories');
  }

  // putIngredient(ingredientId: string) {
  //   return this.http.delete(`http://localhost:8080/ingredients/${ingredientId}`);
  // }


  putIngredient(ingredientId: string, mIngredient: IngredientCard): Observable<IngredientCard> {
    return this.http.put<IngredientCard>(`http://localhost:8080/ingredients/${ingredientId}`,mIngredient);
  }

  postIngredient(mIngredient: IngredientCard): Observable<IngredientCard> {
    return this.http.put<IngredientCard>(`http://localhost:8080/ingredients`,mIngredient);
  }
}




