import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import {Category} from "../models/ingredient-card.model";
import {IngredientCardsService} from "../services/ingredient.service";

@Injectable({
  providedIn: 'root'
})
export class CategoryResolver implements Resolve<Category[]> {

  constructor(private ingredientService: IngredientCardsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Category[]> {
    return this.ingredientService.getCategory();
  }
}
