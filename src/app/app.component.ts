import { Component } from '@angular/core';
import { Shipping } from './models/shipping';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public usdYuan = 6.9;
  public yuanUsd = 0.14;

  // Shipping class
  shipping: Shipping = new Shipping();

  initialPoint() {
    this.setTotalHeight();
    this.setVolumetricWeight();
    this.setPurchase();
  }

  // Calulate total Weight
  setTotalHeight() {
    this.shipping.totalWeight = this.shipping.weight * this.shipping.quantities;
  }

  // Calculate Volumetric Weight
  setVolumetricWeight() {
    this.shipping.volumetricWeight = (this.shipping.height * this.shipping.width * this.shipping.large) * 400;
  }

  // Convert yuan to usd
  convertYuanToUsd(value) {
    return value / this.usdYuan;
  }

  // Calculate total amount YUAN
  setPurchase() {
    this.shipping.purchaseYuan = this.shipping.price * this.shipping.quantities;
    this.shipping.purchaseUsd = this.convertYuanToUsd(this.shipping.purchaseYuan);
  }

}
