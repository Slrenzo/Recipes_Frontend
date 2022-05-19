import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageRecipeComponent } from './home-page-recipe.component';

describe('HomePageRecipeComponent', () => {
  let component: HomePageRecipeComponent;
  let fixture: ComponentFixture<HomePageRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
