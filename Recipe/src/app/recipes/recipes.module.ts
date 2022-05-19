import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeListPage } from './pages/recipe-list/recipe-list.page';
import { RecipeCardListComponent } from "./components/recipe-card-list/recipe-card-list.component";
import { RecipeCardComponent } from "./components/recipe-card/recipe-card.component";
import { SharedModule } from "../shared/shared.module";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
  declarations: [
    RecipeListPage,
    RecipeCardComponent,
    RecipeCardListComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    SharedModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule
  ]
})
export class RecipesModule { }
