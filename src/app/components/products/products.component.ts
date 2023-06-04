import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor() {}
  noFilterList: Product[] = [];
  listProdcut: Product[] = [];
  pricefilter!: number;
  ngOnInit(): void {
    this.listProdcut = [
      { id: 1, title: 'T-shirt 1', price: 18, quantity: 0, like: 0 },
      { id: 2, title: 'T-shirt 2', price: 21, quantity: 10, like: 0 },
      { id: 3, title: 'T-shirt 3', price: 16, quantity: 8, like: 20 },
      { id: 5, title: 'T-shirt 2', price: 21, quantity: 10, like: 0 },
      { id: 4, title: 'T-shirt 3', price: 16, quantity: 8, like: 0 },
    ];
    this.noFilterList = this.listProdcut;
  }

  buy(p: Product) {
    this.listProdcut.forEach((prod) =>
      p.id == prod.id ? prod.quantity-- : prod.quantity
    );
  }
  like(p: Product) {
    this.listProdcut.forEach((prod) =>
      p.id == prod.id ? prod.like++ : prod.like
    );
  }
  filterProducts(e: any) {
    this.pricefilter = e.target?.value;
    console.log(this.pricefilter);

    if (this.pricefilter && this.pricefilter > 0) {
      this.listProdcut = this.noFilterList.filter(
        (prod) => prod.price <= this.pricefilter
      );
      return;
    } else {
      this.listProdcut = this.noFilterList;
    }
  }
}
