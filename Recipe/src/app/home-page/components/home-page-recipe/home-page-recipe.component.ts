import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../models/home-page.model";

@Component({
  selector: 'app-home-page-recipe',
  templateUrl: './home-page-recipe.component.html',
  styleUrls: ['./home-page-recipe.component.scss']
})
export class HomePageRecipeComponent implements OnInit {

  @Input() homePageRecipe!: Recipe;

  constructor() { }

  ngOnInit(): void { }

}
