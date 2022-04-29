import { Component, OnInit } from '@angular/core';
import {IngredientCard} from "./models/ingredient-card.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ingredientCards!: IngredientCard[];
  ngOnInit() {

  }

}
