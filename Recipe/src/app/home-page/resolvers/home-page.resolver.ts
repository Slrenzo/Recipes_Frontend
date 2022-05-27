import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable} from 'rxjs';
import {HomePageService} from "../services/home-page.service";
import {Recipe} from "../../recipes/models/recipe-card.model";

@Injectable({
  providedIn: 'root'
})
export class HomePageResolver implements Resolve<Recipe[]> {

  constructor(private homePageService: HomePageService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe[]> {
    return this.homePageService.getAllRecipe();
  }
}
