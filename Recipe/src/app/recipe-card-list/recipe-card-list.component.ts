import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {RecipeCard} from "../models/recipe-card.model";
import {RecipeCardsService} from "../services/recipe-card.service";

@Component({
  selector: 'app-recipe-card-list',
  templateUrl: './recipe-card-list.component.html',
  styleUrls: ['./recipe-card-list.component.scss']
})
export class RecipeCardListComponent implements OnInit {

  recipeCards$!: Observable<RecipeCard[]>;

  constructor(private recipeCardsService: RecipeCardsService) { }

  ngOnInit(): void {
    this.recipeCards$ = this.recipeCardsService.getAllRecipeCard();
  }

}
