import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-for-you',
  templateUrl: './recipe-for-you.component.html',
  styleUrls: ['./recipe-for-you.component.css']
})
export class RecipeForYouComponent implements OnInit {

  @Input() recipes:Array<any> = [];
  recipe:any;
  displayRecipes = true;
  viewRecipes = false;
  editRecipes = false;

  constructor() { }

  ngOnInit(): void {
  }

  onPressView(value: Array<any>){
    this.displayRecipes = false;
    this.viewRecipes = true;
    this.recipe = value;
  }

  onPressEdit(value: Array<any>){
    this.displayRecipes = false;
    this.editRecipes = true;
    this.recipe = value;
  }

}
