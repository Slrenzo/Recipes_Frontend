import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from "../../models/ingredient.model";

@Component({
  selector: 'app-recipe-ingredient-list',
  templateUrl: './recipe-ingredient-list.component.html',
  styleUrls: ['./recipe-ingredient-list.component.scss']
})
export class RecipeIngredientListComponent implements OnInit {

  @Input() ingredients: Ingredient[] = [];

  ngOnInit(): void {  }

}
