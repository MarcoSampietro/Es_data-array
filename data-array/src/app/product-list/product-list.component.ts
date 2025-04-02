import { Component } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

interface Product {
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-product-list',
  imports: [ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [
    { name: 'Latte', price: 10, description: 'latte scremato' },
    { name: 'Pane', price: 2, description: 'Pane in cassetta' },
    { name: 'Biscotti', price: 30, description: 'Biscotti con goccie di cioccolato' },
    { name: 'Cereali', price: 8, description: 'Cereali barchette' },
    { name: 'Mela', price: 1, description: 'Mela rossa' }
  ]
}