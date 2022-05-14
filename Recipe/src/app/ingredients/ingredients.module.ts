import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IngredientsRoutingModule} from './ingredients-routing.module';
import {IngredientListPage} from './pages/ingredient-list/ingredient-list.page';
import {IngredientCardComponent} from "./components/ingredient-card/ingredient-card.component";
import {IngredientCardListComponent} from "./components/ingredient-card-list/ingredient-card-list.component";
import {MatSelectModule} from "@angular/material/select";
import {DialogModifyIngredientComponent} from "./components/dialog-modify-ingredient/dialog-modify-ingredient.component";
import {MatDialogModule} from "@angular/material/dialog";
import {DialogAddIngredientComponent} from "./components/dialog-add-ingredient/dialog-add-ingredient.component";

@NgModule({
  declarations: [
    IngredientListPage,
    IngredientCardComponent,
    IngredientCardListComponent
  ],
  imports: [
    CommonModule,
    IngredientsRoutingModule,
    MatSelectModule,
    MatDialogModule
  ],
  entryComponents: [
    DialogModifyIngredientComponent,
    DialogAddIngredientComponent
  ]
})
export class IngredientsModule { }
