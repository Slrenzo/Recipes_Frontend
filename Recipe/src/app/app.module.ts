import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {IngredientCardListComponent} from "./ingredient-card-list/ingredient-card-list.component";
import {IngredientCardComponent} from "./ingredient-card/ingredient-card.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IngredientCardListComponent,
    IngredientCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
