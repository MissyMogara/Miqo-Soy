import { Component } from '@angular/core';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';


@Component({
  selector: 'app-products',
  imports: [ProductCatalogComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
