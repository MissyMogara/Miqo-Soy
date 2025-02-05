import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-info-box',
  imports: [],
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.css'
})
export class InfoBoxComponent {
  productDetails = input<string>();
  addProductToCart = output<string>();

  public addProducto(product: string) {
    this.addProductToCart.emit(product);
  }
}