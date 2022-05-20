import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Category, IngredientPutRequest, IngredientResponse} from "../../models/ingredient-card.model";
import {IngredientCardsService} from "../../services/ingredient-card.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DialogDeleteIngredientComponent} from "../dialog-delete-ingredient/dialog-delete-ingredient.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-modify',
  templateUrl: './modify-ingredient.component.html',
  styleUrls: ['./modify-ingredient.component.scss']
})
export class ModifyIngredientComponent implements OnInit {

  //ingredientPutModel: IngredientPutRequest;
  ingredients$!: Observable<IngredientResponse>;

  categories$!: Observable<Category[]>;

  constructor(private ingredientCardsService: IngredientCardsService,
              private router: Router,
              private route: ActivatedRoute,
              private dialogDelete: MatDialog) {

  }

  onSave(ingredient: IngredientResponse) {
    this.ingredientCardsService.putIngredient(ingredient.id, {image : ingredient.image, id:ingredient.id,
                                        name:ingredient.name,categoryId:ingredient.category.id}).subscribe();
    this.router.navigateByUrl("ingredients");
  }

  onDelete(ingredient: IngredientResponse) {
    this.dialogDelete.open(DialogDeleteIngredientComponent, {
      height: '500px',
      width: '750px',
      disableClose : true,
      data: {
        id: ingredient.id,
        name: ingredient.name,
      }
    });
  }

  ngOnInit(): void {
    const ingredientId = this.route.snapshot.params['id'];
    this.ingredients$ = this.ingredientCardsService.getIngredientById(ingredientId);
    this.categories$ = this.ingredientCardsService.getCategory();
  }
}
