import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot, Router
} from '@angular/router';
import { Observable } from 'rxjs';
import {IngredientCardsService} from "../services/ingredient.service";
import {IngredientResponse} from "../models/ingredient-card.model";

@Injectable({
  providedIn: 'root'
})
export class IngredientsResolver implements Resolve<IngredientResponse[]> {

  constructor(private ingredientService: IngredientCardsService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IngredientResponse[]> {
    let name = this.router.getCurrentNavigation()?.extractedUrl.queryParams['name'];
    let category = this.router.getCurrentNavigation()?.extractedUrl.queryParams['category'];
    return this.ingredientService.getIngredientsByParameter(category, name)
  }
}
