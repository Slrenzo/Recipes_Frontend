import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import {SingleRecipe} from "../models/recipe.model";
import {RecipeService} from "../services/recipe.service";

@Injectable({
  providedIn: 'root'
})
export class SingleRecipesResolver implements Resolve<SingleRecipe> {

  constructor(private singleRecipeService: RecipeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SingleRecipe> {
    const id = route.params['id'];
    return this.singleRecipeService.getRecipeById(id);
  }
}
