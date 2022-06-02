import {Component, Input, OnInit} from '@angular/core';
import {Recipe, Type} from "../../models/recipe-card.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-card-list',
  templateUrl: './recipe-card-list.component.html',
  styleUrls: ['./recipe-card-list.component.scss']
})
export class RecipeCardListComponent implements OnInit {

  @Input() recipes: Recipe[] = [];
  @Input() types: Type[] = [];

  typeSelected!: string;
  nameSelected!: string;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.nameSelected = this.route.snapshot.queryParams['name'];
    this.typeSelected = this.route.snapshot.queryParams['type'];
  }

  onChange() {
    this.router.navigate([], {
    relativeTo: this.route,
    queryParams: {'name': this.nameSelected, 'type': this.typeSelected},
    queryParamsHandling: 'merge'
  });}
}
