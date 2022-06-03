import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import {RecipeCardsService} from "../services/recipe-card.service";
import {Unit} from "../models/unit.model";

@Injectable({
  providedIn: 'root'
})
export class UnitsResolver implements Resolve<Unit[]> {

  constructor(private recipeCardService: RecipeCardsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Unit[]> {
    return this.recipeCardService.getUnitsRecipe();
  }
}
