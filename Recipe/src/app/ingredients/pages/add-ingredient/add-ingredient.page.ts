import { Component, OnInit } from '@angular/core';
import {Category} from "../../models/ingredient-card.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.page.html',
  styleUrls: ['./add-ingredient.page.scss']
})
export class AddIngredientPage implements OnInit {

  categories: Category[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.categories = this.activatedRoute.snapshot.data['categories'];
  }

}
