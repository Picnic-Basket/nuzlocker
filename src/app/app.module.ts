import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AddPokemonComponent } from './pokemon/add-pokemon/add-pokemon.component';
import { ViewPokemonComponent } from './pokemon/view-pokemon/view-pokemon.component';


const appRoutes: Routes = [
  //{ path: "", component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AddPokemonComponent,
    ViewPokemonComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
