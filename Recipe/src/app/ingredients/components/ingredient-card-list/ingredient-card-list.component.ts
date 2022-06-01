import {Component, Input, OnInit} from '@angular/core';
import { IngredientCardsService } from "../../services/ingredient.service";
import {Category, IngredientResponse} from "../../models/ingredient-card.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ingredient-card-list',
  templateUrl: './ingredient-card-list.component.html',
  styleUrls: ['./ingredient-card-list.component.scss']
})
export class IngredientCardListComponent implements OnInit {

  categorySelected!: string;
  nameSelected!: string;

  @Input() ingredients: IngredientResponse[] = []
  @Input() categories: Category[] = []

  constructor(private ingredientCardsService: IngredientCardsService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  onChange() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {'name': this.nameSelected, 'category': this.categorySelected},
      queryParamsHandling: 'merge'
    });
  }

  ngOnInit(): void {
    this.nameSelected = this.router.getCurrentNavigation()?.extractedUrl.queryParams['name'];
    this.categorySelected = this.router.getCurrentNavigation()?.extractedUrl.queryParams['category'];
  }
}
