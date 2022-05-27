import { Component, OnInit } from '@angular/core';
import {SingleRecipe} from "../../../single-recipe/models/recipe.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss']
})
export class HomePagePage implements OnInit {

  recipes: SingleRecipe[] = [] ;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.activatedRoute.snapshot.data['recipes'];
  }
}
