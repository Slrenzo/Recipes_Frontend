import {Component, Input, OnInit} from '@angular/core';
import {SingleRecipe} from "../../models/recipe.model";

@Component({
  selector: 'app-recipe-header',
  templateUrl: './recipe-header.component.html',
  styleUrls: ['./recipe-header.component.scss']
})
export class RecipeHeaderComponent implements OnInit {

  @Input() recipe!: SingleRecipe;

  constructor() { }

  ngOnInit(): void {
  }
}
