import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './componenst/home/home.component';
import { NavBarComponent } from './componenst/nav-bar/nav-bar.component';
import { AddProductComponent } from './componenst/add-product/add-product.component';
import { EditProductComponent } from './componenst/edit-product/edit-product.component';
import { NotFoundComponent } from './componenst/not-found/not-found.component';
import { FooterComponent } from './componenst/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    AddProductComponent,
    EditProductComponent,
    NotFoundComponent,
    FooterComponent
    
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // routage 
    FormsModule, // formulaire 
    HttpClientModule, // requette http
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
