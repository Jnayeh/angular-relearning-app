import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes = [
  {path:'', redirectTo:"products", pathMatch:"full"},
  {path:'products', component: ProductsComponent},
  {path:'product/:id', component: ProductDetailsComponent},
  {path:'offres', component: OffresEmploiComponent},
  {path:'articles', component: ArticlesComponent},
  {path:'**', component: OffresEmploiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
