import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable} from 'rxjs';
import {IngredientCardsService} from "../services/ingredient.service";
import {IngredientResponse} from "../models/ingredient-card.model";

@Injectable({
  providedIn: 'root'
})
export class IngredientsIdResolver implements Resolve<IngredientResponse> {

  constructor(private ingredientService: IngredientCardsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IngredientResponse> {
    const id = route.params['id'];
    return this.ingredientService.getIngredientById(id);
  }
}
