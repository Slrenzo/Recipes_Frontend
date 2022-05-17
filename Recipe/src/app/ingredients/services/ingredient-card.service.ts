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

  getIngredientsByParameter(selectedCategory:string, selectedName:string): Observable<IngredientCard[]> {
    let param = new HttpParams().set('category', selectedCategory != null ? selectedCategory : "")
                                .set('name', selectedName != null ? selectedName : "");
    console.log("categorie : " + selectedCategory);
    console.log(selectedName);
    return this.http.get<IngredientCard[]>("http://localhost:8080/ingredients", {params:param});
  }

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:8080/categories');
  }

  deleteIngredient(ingredientId: string) {
    return this.http.delete(`http://localhost:8080/ingredients/${ingredientId}`);
  }

  putIngredient(ingredientId: string, mIngredient: IngredientCard): Observable<IngredientCard> {
    return this.http.put<IngredientCard>(`http://localhost:8080/ingredients/${ingredientId}`,mIngredient);
  }

  postIngredient(mIngredient: IngredientCard): Observable<IngredientCard> {
    return this.http.post<IngredientCard>(`http://localhost:8080/ingredients`,mIngredient);
  }
}




