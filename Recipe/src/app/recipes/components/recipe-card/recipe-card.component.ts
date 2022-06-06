import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../models/recipe-card.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})

export class RecipeCardComponent implements OnInit {

  @Input() recipe!: Recipe;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  onViewRecipe() {
    this.router.navigateByUrl(`recipes/${this.recipe.id}`)
  }
}
