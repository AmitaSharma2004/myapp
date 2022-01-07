import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { analyze } from 'eslint-scope';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Recipe';
  allRecipes: Array<any> = [];
  recipesForYou: Array<any> = [];

  constructor(
    private http: HttpClient
) {}

  ngOnInit(): void {
    const url = 'https://www.fakerestapi.com/datasets/api/v1/clean-recipes-dataset.json'; 
    this.http.get(url).subscribe((data:any)=>this.allRecipes = data['data']);
  }

  categorySelectedByUser(value: string){
    this.recipesForYou = this.allRecipes.filter((element:any) => {
      return element.chef_name == value;
    })
  }


}
