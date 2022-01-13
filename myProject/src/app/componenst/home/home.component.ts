
import { Component, OnInit } from '@angular/core';
import { Observable , of} from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { AppDataState, DataStateEnum } from 'src/app/state/product.state';
import {map,startWith,catchError} from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products$:Observable<AppDataState<Product[]>> | null=null ;
  searchTerm: any="";
  readonly DataStateEnum=DataStateEnum;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  onSearchProduct(){
    this.products$ = this.productService.searchProduct(this.searchTerm).pipe(
      map(data=>({ dataState:DataStateEnum.LOADED, data:data})),
      startWith({ dataState:DataStateEnum.LOADING}),
      catchError(err =>of({ dataState:DataStateEnum.ERROR, errorMessage:err.message}))

    );


    }

  

  }