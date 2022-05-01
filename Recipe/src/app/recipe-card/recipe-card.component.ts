import { Component, OnInit, Input } from '@angular/core';
import {RecipeCard} from "../models/recipe-card.model";

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  @Input() recipeCard!: RecipeCard;

  constructor() { }

  ngOnInit(): void {
  }

}
