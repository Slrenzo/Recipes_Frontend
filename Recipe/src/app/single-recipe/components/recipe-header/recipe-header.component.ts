import {Component, Input, OnInit} from '@angular/core';
import {SingleRecipe} from "../../models/single-recipe.model";
import {SingleRecipeService} from "../../services/single-recipe.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipe-header',
  templateUrl: './recipe-header.component.html',
  styleUrls: ['./recipe-header.component.scss']
})
export class RecipeHeaderComponent implements OnInit {

  @Input() singleRecipe!: SingleRecipe;

  recipeHead!: SingleRecipe;

  constructor(private singleRecipeService: SingleRecipeService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const recipeId = this.route.snapshot.params['id'];
    this.singleRecipeService.getRecipeById(recipeId).subscribe((res: SingleRecipe) => {
      this.recipeHead = res;});
  }
}
