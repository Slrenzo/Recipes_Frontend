import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRecipeListComponent } from './single-recipe-list.component';

describe('SingleRecipeListComponent', () => {
  let component: SingleRecipeListComponent;
  let fixture: ComponentFixture<SingleRecipeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleRecipeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRecipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
