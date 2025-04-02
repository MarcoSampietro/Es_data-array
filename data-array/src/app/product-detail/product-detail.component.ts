import { Component, Input, OnInit } from '@angular/core';

interface Product {
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  @Input() product!: Product;
  constructor() {}
  ngOnInit(): void {}
}