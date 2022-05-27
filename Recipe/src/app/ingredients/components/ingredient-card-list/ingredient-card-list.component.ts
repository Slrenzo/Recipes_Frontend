import {Component, Input, OnInit} from '@angular/core';
import { IngredientCardsService } from "../../services/ingredient.service";
import { Observable } from "rxjs";
import {Category, IngredientResponse} from "../../models/ingredient-card.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ingredient-card-list',
  templateUrl: './ingredient-card-list.component.html',
  styleUrls: ['./ingredient-card-list.component.scss']
})
export class IngredientCardListComponent implements OnInit {

  categories$!: Observable<Category[]>;
  categorySelected!: string;
  nameSelected!: string;

  @Input() ingredients: IngredientResponse[] = []

  constructor(private ingredientCardsService: IngredientCardsService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  onChange() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {'name': this.nameSelected, 'category': this.categorySelected},
      queryParamsHandling: 'merge'
    }).then(() => {
      console.log(this.route.snapshot.data['ingredients']);
    });

    // this.router.navigateByUrl('ingredients', { state: {category : this.categorySelected,
    //                                                           name : this.nameSelected}});

  }

  ngOnInit(): void {
    // this.ingredientCards$ = this.ingredientCardsService
    //   .getIngredientsByParameter(this.categorySelected, this.nameSelected);
    this.categories$ = this.ingredientCardsService.getCategory();
    //this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    // this.categorySelected = this.activatedRoute.snapshot.params['category'];
    // this.nameSelected =this.activatedRoute.snapshot.params['name'];
  }
}
