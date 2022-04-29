import { Injectable } from '@angular/core';
import {IngredientCard} from "../models/ingredient-card.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class IngredientCardsService {

  constructor(private http: HttpClient) {}

  getAllFaceSnaps(): Observable<IngredientCard[]> {
    return this.http.get<IngredientCard[]>('http://localhost:8080/ingredients');
  }

}



