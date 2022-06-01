import { Component, Input, OnInit } from '@angular/core';
import {Step} from "../../models/step.model";

@Component({
  selector: 'app-recipe-step',
  templateUrl: './recipe-step.component.html',
  styleUrls: ['./recipe-step.component.scss']
})
export class RecipeStepComponent implements OnInit {

  @Input() step !: Step;

  constructor() { }

  ngOnInit(): void {
  }

}
