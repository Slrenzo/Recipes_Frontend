import { Component, OnInit } from '@angular/core';
import {SingleRecipe} from "../../../single-recipe/models/recipe.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.page.html',
  styleUrls: ['./recipe-list.page.scss']
})
export class RecipeListPage implements OnInit {

  recipes: SingleRecipe[] = [] ;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.activatedRoute.snapshot.data['recipes'];
  }

}
