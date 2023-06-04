import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { OffresEmploiComponent } from './components/offres-emploi/offres-emploi.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'offres', component: OffresEmploiComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'formulaire', component: TemplateDrivenFormComponent },
  { path: 'todos', component: TodoListComponent },
  { path: '**', component: OffresEmploiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
