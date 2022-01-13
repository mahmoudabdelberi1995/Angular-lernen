import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Product } from "../models/product.model";

@Injectable({providedIn:"root"})
export class ProductService {

    constructor(private http:HttpClient){ }

   saveProduct(product:Product):Observable<Product[]>{
        let host=environment.host;
    return this.http.post<Product[]>(host+"/produits/",product);
    }

    searchProduct(keyword:string):Observable<Product[]>{
        let host=environment.host;
        return this.http.get<Product[]>(host+"/produits?id_like="+keyword);
    }
}