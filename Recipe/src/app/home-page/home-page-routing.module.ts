import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePagePage} from "./pages/home-page/home-page.page";
import {HomePageResolver} from "./resolvers/home-page.resolver";


const routes: Routes = [
  { path: '',
    component : HomePagePage,
    resolve: {
      recipes: HomePageResolver
    },
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomePageRoutingModule { }
