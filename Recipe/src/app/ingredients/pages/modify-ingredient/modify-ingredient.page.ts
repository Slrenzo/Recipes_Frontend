import { Component, OnInit } from '@angular/core';
import {Category, IngredientResponse} from "../../models/ingredient-card.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-modify-ingredient',
  templateUrl: './modify-ingredient.page.html',
  styleUrls: ['./modify-ingredient.page.scss']
})
export class ModifyIngredientPage implements OnInit {

  categories: Category[] = [];
  ingredient!: IngredientResponse;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.categories = this.activatedRoute.snapshot.data['categories'];
    this.ingredient = this.activatedRoute.snapshot.data['ingredient']
  }

}
