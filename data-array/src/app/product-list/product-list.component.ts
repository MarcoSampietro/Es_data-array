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
    { name: 'Latte', price: 2, description: 'Latte scremato da 1 litro' },
    { name: 'Pane', price: 1.5, description: 'Pane in cassetta fresco' },
    { name: 'Biscotti', price: 4, description: 'Biscotti con gocce di cioccolato' },
    { name: 'Mela', price: 1, description: 'Mela rossa biologica' },
    { name: 'Uova', price: 4, description: 'Confezione da 6 uova fresche' },
    { name: 'Formaggio', price: 12, description: 'Formaggio stagionato 200g' },
    { name: 'Pasta', price: 3, description: 'Pasta di semola di grano duro' },
    { name: 'Tonno', price: 5, description: 'Scatoletta di tonno all’olio d’oliva' },
    { name: 'Yogurt', price: 6, description: 'Yogurt bianco naturale' }
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