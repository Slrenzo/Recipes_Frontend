import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {RecipeCard, Type} from "../../models/recipe-card.model";
import {RecipeCardsService} from "../../services/recipe-card.service";

@Component({
  selector: 'app-recipe-card-list',
  templateUrl: './recipe-card-list.component.html',
  styleUrls: ['./recipe-card-list.component.scss']
})
export class RecipeCardListComponent implements OnInit {

  recipeCards$!: Observable<RecipeCard[]>;
  types$!: Observable<Type[]>;

  typeSelected!: string;

  constructor(private recipeCardsService: RecipeCardsService) { }

  ngOnInit(): void {
    this.recipeCards$ = this.recipeCardsService.getRecipesByParameter(this.typeSelected);
    this.types$ = this.recipeCardsService.getTypesRecipe();
  }

  onTypeSelected($event: any) {
    this.recipeCards$ = this.recipeCardsService.getRecipesByParameter(this.typeSelected);
  }

}
