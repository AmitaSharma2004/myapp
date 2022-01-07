import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { PopularRecipesComponent } from './popular-recipes/popular-recipes.component';
import { CategoriesComponent } from './categories/categories.component';
import { RecipeForYouComponent } from './recipe-for-you/recipe-for-you.component';
import { BakingReceipiesComponent } from './baking-receipies/baking-receipies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    PopularRecipesComponent,
    CategoriesComponent,
    RecipeForYouComponent,
    BakingReceipiesComponent,
    ViewRecipeComponent,
    EditRecipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
