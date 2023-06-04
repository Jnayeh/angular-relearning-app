import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { OffresEmploiComponent } from './components/offres-emploi/offres-emploi.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { UsersComponent } from './components/users/users.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductsComponent,
    OffresEmploiComponent,
    ProductDetailsComponent,
    ArticlesComponent,
    TemplateDrivenFormComponent,
    TodoListComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
