import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Recipe, Type} from "../../models/home-page.model";
import {HomePageService} from "../../services/home-page.service";

@Component({
  selector: 'app-home-page-list',
  templateUrl: './home-page-list.component.html',
  styleUrls: ['./home-page-list.component.scss']
})
export class HomePageListComponent implements OnInit {

  recipeCards$!: Observable<Recipe[]>;
  types$!: Observable<Type[]>;

  constructor(private homePageService: HomePageService) { }

  ngOnInit(): void {
    this.recipeCards$ = this.homePageService.getAllRecipeCard();
  }

}
