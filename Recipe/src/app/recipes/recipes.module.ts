import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeListPage } from './pages/recipe-list/recipe-list.page';
import { RecipeCardListComponent } from "./components/recipe-card-list/recipe-card-list.component";
import { RecipeCardComponent } from "./components/recipe-card/recipe-card.component";
import { SharedModule } from "../shared/shared.module";
import {MatSelectModule} from "@angular/material/select";


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
        MatSelectModule
    ]
})
export class RecipesModule { }
