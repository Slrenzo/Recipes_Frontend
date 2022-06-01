import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot, Router
} from '@angular/router';
import { Observable} from 'rxjs';
import {Recipe} from "../models/recipe-card.model";
import {RecipeCardsService} from "../services/recipe-card.service";

@Injectable({
  providedIn: 'root'
})
export class RecipesResolver implements Resolve<Recipe[]> {

  constructor(private recipeCardService: RecipeCardsService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe[]> {
    let name = this.router.getCurrentNavigation()?.extractedUrl.queryParams['name'];
    let type = this.router.getCurrentNavigation()?.extractedUrl.queryParams['type'];
    return this.recipeCardService.getRecipesByParameter(type,name); //stub
  }
}
