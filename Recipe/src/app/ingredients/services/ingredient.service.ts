import { Injectable } from '@angular/core';
import {
  Category,
  IngredientResponse,
  IngredientPutRequest,
  IngredientPostRequest
} from "../models/ingredient-card.model";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class IngredientCardsService {

  constructor(private http: HttpClient) {}

  getIngredientById(ingredientId: string): Observable<IngredientResponse> {
    return this.http.get<IngredientResponse>(`http://localhost:8080/ingredients/${ingredientId}`);
  }

  getIngredientsByParameter(selectedCategory:string, selectedName:string): Observable<IngredientResponse[]> {
    let param = new HttpParams().set('category', selectedCategory != null ? selectedCategory : "")
      .set('name', selectedName != null ? selectedName : "");
    return this.http.get<IngredientResponse[]>("http://localhost:8080/ingredients", {params:param});
  }

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:8080/categories');
  }

  deleteIngredient(ingredientId: string) {
    return this.http.delete(`http://localhost:8080/ingredients/${ingredientId}`);
  }

  putIngredient(ingredientId: string, Ingredient: IngredientPutRequest): Observable<IngredientPutRequest> {
    console.log(Ingredient);
    return this.http.put<IngredientPutRequest>(`http://localhost:8080/ingredients/${ingredientId}`,Ingredient);

  }

  postIngredient(Ingredient: IngredientPostRequest): Observable<IngredientPostRequest> {
    return this.http.post<IngredientPostRequest>(`http://localhost:8080/ingredients`,Ingredient);
  }
}




