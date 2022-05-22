import {Component, Input, OnInit} from '@angular/core';
import {IngredientsMeasures} from "../../models/single-recipe.model";

@Component({
  selector: 'app-recipe-ingredient',
  templateUrl: './recipe-ingredient.component.html',
  styleUrls: ['./recipe-ingredient.component.scss']
})
export class RecipeIngredientComponent implements OnInit {

  @Input() ingredient!: IngredientsMeasures;

  constructor() { }

  ngOnInit(): void {
  }

}
