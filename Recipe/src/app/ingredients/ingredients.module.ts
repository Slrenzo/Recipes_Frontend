import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IngredientsRoutingModule} from './ingredients-routing.module';
import {IngredientListPage} from './pages/ingredient-list/ingredient-list.page';
import {IngredientCardComponent} from "./components/ingredient-card/ingredient-card.component";
import {IngredientCardListComponent} from "./components/ingredient-card-list/ingredient-card-list.component";
import {MatSelectModule} from "@angular/material/select";
import {ModifyIngredientComponent} from "./components/modify-ingredient/modify-ingredient.component";
import {MatDialogModule} from "@angular/material/dialog";
import {AddIngredientComponent} from "./components/add-ingredient/add-ingredient.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import { DialogDeleteIngredientComponent } from './components/dialog-delete-ingredient/dialog-delete-ingredient.component';
import {MatIconModule} from "@angular/material/icon";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    IngredientListPage,
    IngredientCardComponent,
    IngredientCardListComponent,
    ModifyIngredientComponent,
    AddIngredientComponent,
    DialogDeleteIngredientComponent
  ],
  imports: [
    CommonModule,
    IngredientsRoutingModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSnackBarModule
  ],
  entryComponents: [
    ModifyIngredientComponent,
    AddIngredientComponent,
    DialogDeleteIngredientComponent
  ]
})
export class IngredientsModule { }
