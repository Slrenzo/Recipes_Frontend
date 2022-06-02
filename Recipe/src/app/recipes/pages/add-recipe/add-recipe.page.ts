import { Component, OnInit } from '@angular/core';
import {Type} from "../../models/recipe-card.model";
import {ActivatedRoute} from "@angular/router";
import {Ingredient} from "../../models/ingredient.model";

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.page.html',
  styleUrls: ['./add-recipe.page.scss']
})
export class AddRecipePage implements OnInit {

  types: Type[] = [] ;
  ingredients: Ingredient[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.types = this.activatedRoute.snapshot.data['types'];
    this.ingredients = this.activatedRoute.snapshot.data['ingredients'];
  }

}
