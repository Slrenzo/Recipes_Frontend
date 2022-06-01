import { Component, OnInit } from '@angular/core';
import {Category, IngredientResponse} from "../../models/ingredient-card.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.page.html',
  styleUrls: ['./ingredient-list.page.scss']
})
export class IngredientListPage implements OnInit {

  ingredients: IngredientResponse[] = [];
  categories: Category[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.categories = this.activatedRoute.snapshot.data['categories'];
    this.activatedRoute.data.subscribe(_ => this.ingredients = this.activatedRoute.snapshot.data['ingredients'])
  }

}
