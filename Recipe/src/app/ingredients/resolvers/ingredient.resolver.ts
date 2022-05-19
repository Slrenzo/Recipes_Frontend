import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable} from 'rxjs';
import {IngredientPutRequest} from "../models/ingredient-card.model";

@Injectable({
  providedIn: 'root'
})
export class IngredientResolver implements Resolve<IngredientPutRequest> {

  constructor(private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IngredientPutRequest> | IngredientPutRequest {
    return this.router.getCurrentNavigation()?.extras.state?.['ingredient'];
  }
}
