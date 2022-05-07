import {Component, Input, OnInit} from '@angular/core';
import {filter, map, Observable} from "rxjs";
import {SingleRecipeService} from "../services/single-recipe.service";
import {SingleRecipe} from "../models/single-recipe.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.scss']
})
export class SingleRecipeComponent implements OnInit {

  @Input() singleRecipe!: SingleRecipe;

  singleRecipe$!: Observable<SingleRecipe>;


  constructor(private singleRecipeService: SingleRecipeService,
              private route: ActivatedRoute) { }


  ngOnInit(): void {
    const recipeId = this.route.snapshot.params['id'];
    this.singleRecipe$ = this.singleRecipeService.getRecipeById(recipeId);

  }

}
