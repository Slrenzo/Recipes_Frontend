import {Component, Input, OnInit} from '@angular/core';
import {SingleRecipe} from "../../models/single-recipe.model";
import {Observable} from "rxjs";
import {SingleRecipeService} from "../../services/single-recipe.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipe-header',
  templateUrl: './recipe-header.component.html',
  styleUrls: ['./recipe-header.component.scss']
})
export class RecipeHeaderComponent implements OnInit {

  @Input() singleRecipe!: SingleRecipe;

  singleRecipe$!: Observable<SingleRecipe>;

  constructor(private singleRecipeService: SingleRecipeService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const recipeId = this.route.snapshot.params['id'];
    this.singleRecipe$ = this.singleRecipeService.getRecipeById(recipeId);

  }
}
