import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IngredientListPage } from './pages/ingredient-list/ingredient-list.page';
import { IngredientCardComponent } from "./components/ingredient-card/ingredient-card.component";
import { IngredientCardListComponent } from "./components/ingredient-card-list/ingredient-card-list.component";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    IngredientListPage,
    IngredientCardComponent,
    IngredientCardListComponent
  ],
    imports: [
        CommonModule,
        IngredientsRoutingModule,
        MatSelectModule
    ],
})
export class IngredientsModule { }
