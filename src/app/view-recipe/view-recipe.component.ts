import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent implements OnInit {

  @Input() recipe:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
