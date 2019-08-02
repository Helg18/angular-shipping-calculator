import { Component } from '@angular/core';
import { Shipping } from './models/shipping';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Shipping class
  shipping: Shipping = new Shipping();

  initialPoint() {
    this.setTotalHeight();
    this.setVolumetricWeight();
    this.setPurchase();
    this.setTotalChinaToUsa();
    this.setTotalUsaToVzla();
    this.setGrandTotals();
  }

  // Calulate total Weight
  setTotalHeight() {
    this.shipping.totalWeight = this.shipping.weight * this.shipping.quantities;
  }

  // Calculate Volumetric Weight
  setVolumetricWeight() {
    this.shipping.volumetricWeight = (this.shipping.height * this.shipping.width * this.shipping.large) * 400;
    this.shipping.totalVolumetricWeight = this.shipping.volumetricWeight * this.shipping.quantities;
  }

  // Convert yuan to usd
  convertYuanToUsd(value) {
    return value / this.shipping.usdYuan;
  }

  // Convert USD to yuan
  convertUsdToYuan(value) {
    return  value / this.shipping.yuanUsd;
  }

  // Calculate total amount YUAN
  setPurchase() {
    this.shipping.purchaseYuan = this.shipping.price * this.shipping.quantities;
    this.shipping.purchaseUsd = this.convertYuanToUsd(this.shipping.purchaseYuan);
  }

  // Calculate bigest Weight
  calculateBigestWeight() {
    if (this.shipping.totalWeight > this.shipping.totalVolumetricWeight) {
      return  this.shipping.totalWeight;
    } else {
      return  this.shipping.totalVolumetricWeight;
    }
  }

  // Calculate China to USA
  setTotalChinaToUsa() {
    const grandWeight = this.calculateBigestWeight();
    this.shipping.usaYuan = grandWeight * this.shipping.ctuPrice;
    this.shipping.usaUsd = this.convertYuanToUsd(this.shipping.usaYuan);
  }

  // Calculate USA to Vzla
  setTotalUsaToVzla() {
    const grandWeight = this.calculateBigestWeight();
    this.shipping.vzlaUsd = this.shipping.utvPrice * grandWeight;
    this.shipping.vzlaYuan = this.convertUsdToYuan(this.shipping.vzlaUsd);
  }

  // Set Grand totals
  setGrandTotals() {
    this.shipping.yuanGrandTotal = this.shipping.purchaseYuan + this.shipping.usaYuan + this.shipping.vzlaYuan;
    this.shipping.usdGrandTotal = this.shipping.purchaseUsd + this.shipping.usaUsd + this.shipping.vzlaUsd;
  }

}
