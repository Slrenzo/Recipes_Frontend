import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageListComponent } from './components/home-page-list/home-page-list.component';
import { HomePagePage } from './pages/home-page/home-page.page';
import {SharedModule} from "../shared/shared.module";
import {RecipesModule} from "../recipes/recipes.module";


@NgModule({
  declarations: [
    HomePageListComponent,
    HomePagePage
  ],
    imports: [
        CommonModule,
        HomePageRoutingModule,
        SharedModule,
        RecipesModule
    ]
})
export class HomePageModule { }
