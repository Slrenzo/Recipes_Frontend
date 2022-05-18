import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Recipe, Type} from "../../models/recipe-card.model";
import {RecipeCardsService} from "../../services/recipe-card.service";

@Component({
  selector: 'app-recipe-card-list',
  templateUrl: './recipe-card-list.component.html',
  styleUrls: ['./recipe-card-list.component.scss']
})
export class RecipeCardListComponent implements OnInit {

  recipeCards$!: Observable<Recipe[]>;
  types$!: Observable<Type[]>;

  typeSelected!: string;
  nameSelected!: string;

  constructor(private recipeCardsService: RecipeCardsService) { }

  ngOnInit(): void {
    this.recipeCards$ = this.recipeCardsService
                        .getRecipesByParameter(this.typeSelected, this.nameSelected);
    this.types$ = this.recipeCardsService.getTypesRecipe();
  }

  onChange() {
    this.recipeCards$ = this.recipeCardsService
                        .getRecipesByParameter(this.typeSelected, this.nameSelected);
  }
}
