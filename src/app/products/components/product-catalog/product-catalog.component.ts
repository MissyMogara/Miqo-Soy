import { Component, signal } from '@angular/core';
import { InfoBoxComponent } from '../info-box/info-box.component';

@Component({
  selector: 'app-product-catalog',
  imports: [InfoBoxComponent],
  templateUrl: './product-catalog.component.html',
  styleUrl: './product-catalog.component.css'
})
export class ProductCatalogComponent {
  // CATALOG
  productsClassic = [
    { name: 'Fresa Soja Smoothie', description: 'Fresas frescas con leche de soja y un toque de vainilla.', added: false },
    { name: 'Plátano Energía', description: 'Plátano maduro con un toque de canela y leche de soja.', added: false },
    { name: 'Cacao Intenso', description: 'Chocolate puro con leche de soja y un toque de miel.', added: false },
    { name: 'Vainilla Cremosa', description: 'Leche de soja con vainilla natural y un toque de almendra.', added: false },
  ];

  productsSpecial = [
    { name: 'Mora Antioxidante', description: 'Moras, arándanos y un toque de chía con leche de soja.', added: false },
    { name: 'Matcha Power', description: 'Té matcha, leche de soja y un toque de miel.', added: false },
    { name: 'Avellana Choco-Soja', description: 'Crema de avellanas, cacao y leche de soja.', added: false },
    { name: 'Dulce Calabaza', description: 'Puré de calabaza, canela y nuez moscada con leche de soja.', added: false },
  ];

  productsRefresh = [
    { name: 'Piña Colada Soja', description: 'Piña, coco y leche de soja, ¡sabe a vacaciones!', added: false },
    { name: 'Mango Tropical', description: 'Mango, maracuyá y leche de soja.', added: false },
    { name: 'Sandía Fresh', description: 'Sandía, menta y leche de soja.', added: false },
    { name: 'Melocotón Sunrise', description: 'Melocotón, jengibre y leche de soja.', added: false },
  ];

  productsProtein = [
    { name: 'Power Peanut', description: 'Crema de cacahuete, plátano y proteína de soja.', added: false },
    { name: 'Green Detox', description: 'Espinaca, manzana verde y leche de soja.', added: false },
    { name: 'Choco Fit', description: 'Cacao puro, almendras y proteína vegana.', added: false },
    { name: 'Avena & Canela', description: 'Avena, canela y dátiles con leche de soja.', added: false },
  ];

  // INPUT
  public productDetails = signal<string>("");

  public favProducts: string[] = [];

  // METHODS
  public showProductDetails(details: string) {
    this.productDetails.set(details);
  }

  public updateProductList(product: string) {
    if (!this.favProducts.includes(product)) {
      this.favProducts.push(product);
    }
  }

  public deleteProductList(productRemove: string) {
    if (this.favProducts.includes(productRemove)) {
      this.favProducts = this.favProducts.filter(product => product !== productRemove);
    }      
  }
}