import { Component, OnInit } from '@angular/core';
import {IngredientResponse} from "../../models/ingredient-card.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.page.html',
  styleUrls: ['./ingredient-list.page.scss']
})
export class IngredientListPage implements OnInit {

  ingredients: IngredientResponse[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.ingredients = this.activatedRoute.snapshot.data['ingredients'];
  }

}
