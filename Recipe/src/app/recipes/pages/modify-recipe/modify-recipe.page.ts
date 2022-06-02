import { Component, OnInit } from '@angular/core';
import {SingleRecipe} from "../../models/recipe.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-modify-recipe',
  templateUrl: './modify-recipe.page.html',
  styleUrls: ['./modify-recipe.page.scss']
})
export class ModifyRecipePage implements OnInit {

  recipe!: SingleRecipe ;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipe = this.activatedRoute.snapshot.data['recipe'];
  }
}
