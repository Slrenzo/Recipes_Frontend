import { Component, OnInit } from '@angular/core';
import {SingleRecipeService} from "../../services/single-recipe.service";
import {Observable} from "rxjs";
import {IngredientsMeasures, SingleRecipe} from "../../models/single-recipe.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipe-ingredient-list',
  templateUrl: './recipe-ingredient-list.component.html',
  styleUrls: ['./recipe-ingredient-list.component.scss']
})
export class RecipeIngredientListComponent implements OnInit {

  ingredients: IngredientsMeasures[] = [];

  test!: Observable<SingleRecipe>;

  constructor(private singleRecipeService: SingleRecipeService,
              private route: ActivatedRoute) {

    const recipeId = this.route.snapshot.params['id'];
    this.test =  this.singleRecipeService.getRecipeById(recipeId);
    // this.singleRecipeService.getRecipeById(recipeId).subscribe((res: IngredientsMeasures[]) => {
    //   this.ingredients = res;
    // });
    this.test.subscribe((res: SingleRecipe) => console.log(res));
  }

  ngOnInit(): void {  }

}
