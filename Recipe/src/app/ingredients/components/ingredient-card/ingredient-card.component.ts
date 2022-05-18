import { Component, OnInit, Input } from '@angular/core';
import {IngredientResponse} from "../../models/ingredient-card.model";

@Component({
  selector: 'app-ingredient-card',
  templateUrl: './ingredient-card.component.html',
  styleUrls: ['./ingredient-card.component.scss']
})

export class IngredientCardComponent implements OnInit {

  @Input() ingredient!: IngredientResponse

  constructor() { }

  ngOnInit(): void {  }
}

