import { Component, OnInit } from '@angular/core';
import {SingleRecipe} from "../../models/recipe.model";
import {ActivatedRoute} from "@angular/router";
import {Type} from "../../models/recipe-card.model";
import {Unit} from "../../models/unit.model";
import {IngredientResponse} from "../../../ingredients/models/ingredient-card.model";

@Component({
  selector: 'app-modify-recipe',
  templateUrl: './modify-recipe.page.html',
  styleUrls: ['./modify-recipe.page.scss']
})
export class ModifyRecipePage implements OnInit {

  recipe!: SingleRecipe;
  types: Type[] = [] ;
  ingredients: IngredientResponse[] = [];
  units: Unit[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipe = this.activatedRoute.snapshot.data['recipe'];
    this.types = this.activatedRoute.snapshot.data['types'];
    this.ingredients = this.activatedRoute.snapshot.data['ingredients'];
    this.units = this.activatedRoute.snapshot.data['units'];
  }
}
