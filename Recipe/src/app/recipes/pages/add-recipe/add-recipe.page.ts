import { Component, OnInit } from '@angular/core';
import {Type} from "../../models/recipe-card.model";
import {ActivatedRoute} from "@angular/router";
import {Unit} from "../../models/unit.model";
import {IngredientResponse} from "../../../ingredients/models/ingredient-card.model";

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.page.html',
  styleUrls: ['./add-recipe.page.scss']
})
export class AddRecipePage implements OnInit {

  types: Type[] = [] ;
  ingredients: IngredientResponse[] = [];
  units: Unit[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.types = this.activatedRoute.snapshot.data['types'];
    this.ingredients = this.activatedRoute.snapshot.data['ingredients'];
    this.units = this.activatedRoute.snapshot.data['units'];
  }

}
