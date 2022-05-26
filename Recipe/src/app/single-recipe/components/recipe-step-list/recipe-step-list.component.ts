import { Component, Input, OnInit } from '@angular/core';
import {Step} from "../../models/step.model";

@Component({
  selector: 'app-recipe-step-list',
  templateUrl: './recipe-step-list.component.html',
  styleUrls: ['./recipe-step-list.component.scss']
})
export class RecipeStepListComponent implements OnInit {

  @Input() steps : Step[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
