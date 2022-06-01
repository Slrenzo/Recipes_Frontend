import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Recipe, Type} from "../../models/recipe-card.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.page.html',
  styleUrls: ['./recipe-list.page.scss']
})
export class RecipeListPage implements OnInit {

  recipes: Recipe[] = [] ;
  types: Type[] = [] ;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.types = this.activatedRoute.snapshot.data['types'];
    this.activatedRoute.data.subscribe(_ => this.recipes = this.activatedRoute.snapshot.data['recipes'])
  }

}
