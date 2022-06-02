import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {RecipeCardsService} from "../services/recipe-card.service";
import {Type} from "../models/recipe-card.model";

@Injectable({
  providedIn: 'root'
})
export class TypesResolver implements Resolve<Type[]> {

  constructor(private recipeCardService: RecipeCardsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Type[]> {
    return this.recipeCardService.getTypesRecipe();
  }
}
