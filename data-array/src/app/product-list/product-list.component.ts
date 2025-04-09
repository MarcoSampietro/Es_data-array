import { Component } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-product-list',
  imports: [ProductDetailComponent, CommonModule, FormsModule],
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
  
  selectedProduct = null;
  newProduct = { name: '', price: 0, description: '' }

  selectProduct(product: any): void {
    this.selectedProduct = product;
  }

  deleteProduct(index: number): void {
    this.products.splice(index, 1);
  }

  onSubmit() : void {
    if (this.newProduct.name && this.newProduct.price) {
      this.products.push({ ...this.newProduct });
      this.newProduct = { name: '', price: 0, description: '' }; // Resetta il modulo
    }
  }
}
