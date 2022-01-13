import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './componenst/add-product/add-product.component';
import { EditProductComponent } from './componenst/edit-product/edit-product.component';
import { HomeComponent } from './componenst/home/home.component';
import { NotFoundComponent } from './componenst/not-found/not-found.component';


const routes: Routes = [
{path:'', component:HomeComponent},
{path:'addProduct', component:AddProductComponent},
{path:'editProduct', component:EditProductComponent}, 
{path:'editProduct', component:EditProductComponent}, 
{path:'notFound', component:NotFoundComponent},
{path:'**', component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
