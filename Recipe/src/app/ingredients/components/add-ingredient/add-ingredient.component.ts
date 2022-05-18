import {Component, OnInit} from '@angular/core';
import {IngredientCardsService} from "../../services/ingredient-card.service";
import {Observable} from "rxjs";
import {Category, IngredientPostRequest} from "../../models/ingredient-card.model";

@Component({
  selector: 'app-dialog-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss']
})
export class AddIngredientComponent implements OnInit {

  ingredientPostModel!: IngredientPostRequest;

  categories$!: Observable<Category[]>;

  constructor(private ingredientCardsService: IngredientCardsService) { }

  onCreate(ingredient: IngredientPostRequest) {
    this.ingredientCardsService.postIngredient({
      name: ingredient.name,
      categoryId: ingredient.categoryId
    }).subscribe();
  }

  // onFileUpload(event: any) {
  //   const file = event.target.files[0];
  //   let newFile = new File([file], "OUI.png", {
  //     type: file.type,
  //   });
  //   console.log(newFile);
  //   //TODO GESTION DES IMAGES
  // }

  ngOnInit(): void {
    this.categories$ = this.ingredientCardsService.getCategory();
  }

}
