import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IngredientCardComponent } from './ingredient-card/ingredient-card.component';
import { IngredientCardListComponent } from './ingredient-card-list/ingredient-card-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import {appRoutingModule} from "./app-routing.module";
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeCardListComponent } from './recipe-card-list/recipe-card-list.component';
import {TimePipe} from "./pipes/time.pipe";
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';



@NgModule({
  declarations: [
    AppComponent,
    IngredientCardComponent,
    IngredientCardListComponent,
    NavbarComponent,
    RecipeCardComponent,
    RecipeCardListComponent,
    TimePipe,
    SingleRecipeComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
