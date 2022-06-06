import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IngredientsRoutingModule} from './ingredients-routing.module';
import {IngredientListPage} from './pages/ingredient-list/ingredient-list.page';
import {IngredientCardComponent} from "./components/ingredient-card/ingredient-card.component";
import {IngredientCardListComponent} from "./components/ingredient-card-list/ingredient-card-list.component";
import {MatSelectModule} from "@angular/material/select";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {DialogDeleteComponent} from '../shared/components/dialog-delete/dialog-delete.component';
import {MatIconModule} from "@angular/material/icon";
import {AddIngredientPage} from './pages/add-ingredient/add-ingredient.page';
import {AddIngredientListComponent} from './components/add-ingredient-list/add-ingredient-list.component';
import {ModifyIngredientListComponent} from './components/modify-ingredient-list/modify-ingredient-list.component';
import {ModifyIngredientPage} from './pages/modify-ingredient/modify-ingredient.page';
import {MatRippleModule} from "@angular/material/core";

@NgModule({
  declarations: [
    IngredientListPage,
    IngredientCardComponent,
    IngredientCardListComponent,
    AddIngredientPage,
    AddIngredientListComponent,
    ModifyIngredientListComponent,
    ModifyIngredientPage
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
        MatRippleModule
    ],
  entryComponents: [
    DialogDeleteComponent
  ]
})
export class IngredientsModule { }
