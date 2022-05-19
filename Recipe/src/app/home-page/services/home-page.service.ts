import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Recipe} from "../../recipes/models/recipe-card.model";

@Injectable({
  providedIn: 'root'
})

export class HomePageService {

  constructor(private http: HttpClient) {}

  getAllRecipeCard(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('http://localhost:8080/');
  }

}



