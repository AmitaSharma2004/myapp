import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeForYouComponent } from './recipe-for-you.component';

describe('RecipeForYouComponent', () => {
  let component: RecipeForYouComponent;
  let fixture: ComponentFixture<RecipeForYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeForYouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeForYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
