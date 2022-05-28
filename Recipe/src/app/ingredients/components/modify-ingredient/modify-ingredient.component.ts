import {Component, OnInit} from '@angular/core';
import {Observable, Subscriber} from "rxjs";
import {Category, IngredientResponse} from "../../models/ingredient-card.model";
import {IngredientCardsService} from "../../services/ingredient.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DialogDeleteIngredientComponent} from "../dialog-delete-ingredient/dialog-delete-ingredient.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-modify',
  templateUrl: './modify-ingredient.component.html',
  styleUrls: ['./modify-ingredient.component.scss']
})
export class ModifyIngredientComponent implements OnInit {

  categories$!: Observable<Category[]>;
  ingredient!: IngredientResponse;

  constructor(private ingredientCardsService: IngredientCardsService,
              private router: Router,
              private route: ActivatedRoute,
              private dialogDelete: MatDialog) {

    const ingredientId = this.route.snapshot.params['id'];
    console.log(ingredientId)
    this.ingredientCardsService.getIngredientById(ingredientId).subscribe((res: IngredientResponse) => {
      this.ingredient = res;
    });
  }

  onSave(ingredient: IngredientResponse) {
    this.ingredientCardsService.putIngredient(ingredient.id,
      {
        image : ingredient.image,
        id:ingredient.id,
        name:ingredient.name,
        categoryId:ingredient.category.id
      }).subscribe();
    this.router.navigateByUrl("ingredients");

  }

  onDelete(ingredient: IngredientResponse) {
    this.dialogDelete.open(DialogDeleteIngredientComponent, {
      height: '500px',
      width: '750px',
      disableClose : true,
      data: {
        image: ingredient.image,
        id: ingredient.id,
        name: ingredient.name
      }
    });
  }

  ngOnInit(): void {
    this.categories$ = this.ingredientCardsService.getCategory();
  }

  onFileUpload(event: any) {
    const file = event.target.files[0];
    this.converToBase64(file);
  }

  converToBase64(file: File) {
    const imageObs = new Observable((subscriber: Subscriber<string>) => { this.readFile(file, subscriber) })

    imageObs.subscribe((fileImg) => {
      this.ingredient.image = fileImg;
    })
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
  }
}
