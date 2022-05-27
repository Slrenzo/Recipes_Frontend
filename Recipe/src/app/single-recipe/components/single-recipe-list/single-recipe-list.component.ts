import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../models/recipe.model";

@Component({
  selector: 'app-single-recipe-list',
  templateUrl: './single-recipe-list.component.html',
  styleUrls: ['./single-recipe-list.component.scss']
})
export class SingleRecipeListComponent implements OnInit {

  @Input() recipe!: Recipe;

  constructor() { }

  ngOnInit(): void { }

  onModify(recipe: Recipe) {

  }
}
