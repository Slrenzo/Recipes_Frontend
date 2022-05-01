import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {RecipeCard} from "../models/recipe-card.model";

@Component({
  selector: 'app-recipe-card-list',
  templateUrl: './recipe-card-list.component.html',
  styleUrls: ['./recipe-card-list.component.scss']
})
export class RecipeCardListComponent implements OnInit {

  recipeCards$!: Observable<RecipeCard[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
