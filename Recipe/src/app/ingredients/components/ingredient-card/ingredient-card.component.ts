import { Component, OnInit, Input } from '@angular/core';
import {IngredientCard} from "../../models/ingredient-card.model";

@Component({
  selector: 'app-ingredient-card',
  templateUrl: './ingredient-card.component.html',
  styleUrls: ['./ingredient-card.component.scss']
})
export class IngredientCardComponent implements OnInit {

  @Input() ingredientCard!: IngredientCard

  ngOnInit(){
  }

}

