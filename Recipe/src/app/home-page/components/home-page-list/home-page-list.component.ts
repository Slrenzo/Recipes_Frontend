import {Component, Input, OnInit} from '@angular/core';
import {SingleRecipe} from "../../../recipes/models/recipe.model";

@Component({
  selector: 'app-home-page-list',
  templateUrl: './home-page-list.component.html',
  styleUrls: ['./home-page-list.component.scss']
})
export class HomePageListComponent implements OnInit {

  @Input() recipes: SingleRecipe[] = [];

  constructor() { }

  ngOnInit(): void { }

}
