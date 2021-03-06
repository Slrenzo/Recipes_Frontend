import {Component, Input, OnInit} from '@angular/core';
import {SingleRecipe} from "../../models/recipe.model";

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.scss']
})
export class RecipeInfoComponent implements OnInit {

  @Input() recipe !: SingleRecipe;

  constructor() { }

  ngOnInit(): void {
  }

}
