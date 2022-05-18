import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {IngredientResponse} from "../models/ingredient-card.model";

@Injectable({
  providedIn: 'root'
})
export class IngredientResolver implements Resolve<IngredientResponse> {

  constructor(private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IngredientResponse> | IngredientResponse {
    return this.router.getCurrentNavigation()?.extras.state?.['ingredient'];
  }
}
