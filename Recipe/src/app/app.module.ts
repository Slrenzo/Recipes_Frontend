import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { appRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModifyIngredientComponent } from './ingredients/components/dialog-modify-ingredient/dialog-modify-ingredient.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import { DialogAddIngredientComponent } from './ingredients/components/dialog-add-ingredient/dialog-add-ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DialogModifyIngredientComponent,
    DialogAddIngredientComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
