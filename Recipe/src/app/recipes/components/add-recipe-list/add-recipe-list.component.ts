import { Component, OnInit } from '@angular/core';
import {ImageService} from "../../../image.service";

@Component({
  selector: 'app-add-recipe-list',
  templateUrl: './add-recipe-list.component.html',
  styleUrls: ['./add-recipe-list.component.scss']
})
export class AddRecipeListComponent implements OnInit {

  image: string = "assets/add.png";

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
  }

  onFileUpload(event: any) {
    const file = event.target.files[0];
    this.imageService.readFile(file).then(i => this.image = i?.toString() ?? '');
  }

}
