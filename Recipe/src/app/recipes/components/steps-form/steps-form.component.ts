import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {StepRequest} from "../../models/step.model";
import {SingleRecipe} from "../../models/recipe.model";

@Component({
  selector: 'app-steps-form',
  templateUrl: './steps-form.component.html',
  styleUrls: ['./steps-form.component.scss']
})
export class StepsFormComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<StepRequest[]>();
  @Input() recipe!: SingleRecipe;

  stepForm!: FormGroup;
  stepRequest: StepRequest[] = [];

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.stepForm = this.formBuilder.group({
      addStep: this.formBuilder.array([]),
    });

    if (this.recipe != null) {
      this.recipe.steps.forEach(value => {
        const stepForm = this.formBuilder.group({
          descr: value.descr});
        this.addStep.push(stepForm);
      })
    }
  }

  getFormGroup(control: AbstractControl) { return control as FormGroup;}

  get addStep() {
    return this.stepForm.get('addStep') as FormArray;
  }
  addItemsStep() {
    const stepForm = this.formBuilder.group({descr: [null], step_order: [null]})
    this.addStep.push(stepForm);
  }
  removeStep(stepIndex: number) {
    this.addStep.removeAt(stepIndex);
  }
  get addIngredient() {
    return this.stepForm.controls['addIngredient'] as FormArray;
  }


  submit() {
    this.stepForm.value.addStep.forEach((element: any, index: number) => this.stepRequest.push({step_order: element.step_order = index + 1, descr:element.descr}))
    this.newItemEvent.emit(this.stepRequest);
  }
}
