import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageListComponent } from './components/home-page-list/home-page-list.component';
import { HomePageRecipeComponent } from './components/home-page-recipe/home-page-recipe.component';
import { HomePagePage } from './pages/home-page/home-page.page';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    HomePageListComponent,
    HomePageRecipeComponent,
    HomePagePage
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule
  ]
})
export class HomePageModule { }
