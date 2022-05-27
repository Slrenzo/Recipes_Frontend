import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Recipe, Type} from "../../models/recipe-card.model";

@Component({
  selector: 'app-recipe-card-list',
  templateUrl: './recipe-card-list.component.html',
  styleUrls: ['./recipe-card-list.component.scss']
})
export class RecipeCardListComponent implements OnInit {

  @Input() recipes: Recipe[] = [];
  // -------------------------------------------------
  // Les types doivent passer par un resolver ???????
  // -------------------------------------------------
  types$!: Observable<Type[]>;

  typeSelected!: string;
  nameSelected!: string;

  constructor() { }

  ngOnInit(): void { }

  onChange() { }
}
