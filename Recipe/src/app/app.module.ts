import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { appRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddRecipeComponent } from './recipes/components/add-recipe/add-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddRecipeComponent,
  ],
    imports: [
        BrowserModule,
        appRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
    ],
  bootstrap: [AppComponent],
})
export class AppModule { }
