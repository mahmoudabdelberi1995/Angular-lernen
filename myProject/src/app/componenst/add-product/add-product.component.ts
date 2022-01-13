import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {
  ProductFormGroup?:FormGroup;




  constructor( private productService:ProductService,
               private fb:FormBuilder,
               private router:Router) { }

  ngOnInit(): void {
    this.ProductFormGroup = this.fb.group({
      name:["", Validators.required],
      prix:[0, Validators.required],
      quantity:["", Validators.required],
    });
  }
  onSaveProduct(){
    if(this.ProductFormGroup?.invalid) return;
    this.productService.saveProduct(this.ProductFormGroup?.value).subscribe(data =>{
      alert("save succes" ) // affichage msg 
      this.ProductFormGroup?.reset(); // vider formulaire 
      this.router.navigateByUrl("/"); // redirect to home page 
    });

  }

}
