import { Component, OnInit } from '@angular/core';
import {Category} from "../../models/ingredient-card.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-modify-ingredient',
  templateUrl: './modify-ingredient.page.html',
  styleUrls: ['./modify-ingredient.page.scss']
})
export class ModifyIngredientPage implements OnInit {

  categories: Category[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.categories = this.activatedRoute.snapshot.data['categories'];
  }

}
