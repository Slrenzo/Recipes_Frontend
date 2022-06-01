import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot, Router
} from '@angular/router';
import { Observable } from 'rxjs';
import {SingleRecipe} from "../models/recipe.model";
import {SingleRecipeService} from "../services/single-recipe.service";

@Injectable({
  providedIn: 'root'
})
export class SingleRecipesResolver implements Resolve<SingleRecipe> {

  constructor(private singleRecipeService: SingleRecipeService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SingleRecipe> {
    const id = this.router.getCurrentNavigation()?.extractedUrl.toString().substring(9);
    return this.singleRecipeService.getRecipeById(id == null ? "" : id);
  }
}
