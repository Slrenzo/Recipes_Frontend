import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Recipe} from "../../models/recipe.model";

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.page.html',
  styleUrls: ['./single-recipe.page.scss']
})
export class SingleRecipePage implements OnInit {

  recipe!: Recipe ;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipe = this.activatedRoute.snapshot.data['recipe'];
  }

}
