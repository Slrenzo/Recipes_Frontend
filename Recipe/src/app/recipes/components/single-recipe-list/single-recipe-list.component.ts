import {Component, Input, OnInit} from '@angular/core';
import {SingleRecipe} from "../../models/recipe.model";

@Component({
  selector: 'app-single-recipe-list',
  templateUrl: './single-recipe-list.component.html',
  styleUrls: ['./single-recipe-list.component.scss']
})
export class SingleRecipeListComponent implements OnInit {

  @Input() recipe!: SingleRecipe;

  constructor() { }

  ngOnInit(): void { }

}
