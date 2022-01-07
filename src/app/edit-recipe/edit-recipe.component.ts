import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  
  @Input() recipe:any;
  displayForm: boolean = true;
  displayMessage: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  submitRecipe(){
    this.displayForm = false;
    this.displayMessage = true;
  }

}
