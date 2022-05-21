import {Component, OnInit} from '@angular/core';
import {IngredientCardsService} from "../../services/ingredient-card.service";
import {Observable, Subscriber} from "rxjs";
import {Category, IngredientPostRequest} from "../../models/ingredient-card.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss']
})
export class AddIngredientComponent implements OnInit {

  ingredientPostModel!: IngredientPostRequest;
  ingredientForm!: FormGroup;

  image: string = "assets/add.png";
  categories$!: Observable<Category[]>;

  constructor(private ingredientCardsService: IngredientCardsService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  onSubmitForm() {
    console.log(this.image);
    this.ingredientCardsService.postIngredient({
      image: this.image,
      name: this.ingredientForm.value.name,
      categoryId: this.ingredientForm.value.categoryId
    }).subscribe();
    this.router.navigateByUrl("ingredients");
  }

  onFileUpload(event: any) {
    const file = event.target.files[0];
    this.converToBase64(file);
  }

  converToBase64(file: File) {
    const imageObs = new Observable((subscriber: Subscriber<string>) => {
      this.readFile(file, subscriber)
    })

    imageObs.subscribe((fileImg) => {
      this.image = fileImg;
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

  ngOnInit(): void {
    this.categories$ = this.ingredientCardsService.getCategory();
    this.ingredientForm = this.formBuilder.group({
      name: [null],
      categoryId: [null]
    });
  }
}

