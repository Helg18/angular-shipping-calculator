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
    this.setCubicMeter();
    this.setPurchase();
    this.setTotalChinaToUsa();
    this.setTotalUsaToVzla();
    this.setGrandTotals();
    this.setUnitCost();
  }

  // Calculate total Weight
  setTotalHeight() {
    this.shipping.totalWeight = this.shipping.weight * this.shipping.quantities;
  }

  // Calculate Volumetric Weight
  setVolumetricWeight() {
    this.shipping.volumetricWeight = ((this.shipping.height * this.shipping.width * this.shipping.large) / 0.5) * 100;
    this.shipping.totalVolumetricWeight = Math.ceil(this.shipping.volumetricWeight * this.shipping.quantities);
  }

  // Calculate Cubic meter
  setCubicMeter() {
    this.shipping.cubicMeter = (this.shipping.height * this.shipping.width * this.shipping.large);
    const t = this.shipping.cubicMeter * this.shipping.units;
    this.shipping.totalcubicMeter = Math.ceil((t * this.shipping.quantities) * 100) / 100;
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

  // Calculate biggest Weight
  calculateBiggestWeight() {
    if (this.shipping.totalWeight > this.shipping.totalVolumetricWeight) {
      return  this.shipping.totalWeight;
    } else {
      return  this.shipping.totalVolumetricWeight;
    }
  }

  // Calculate China to USA
  setTotalChinaToUsa() {
    const grandWeight = this.calculateBiggestWeight();
    this.shipping.usaYuan = grandWeight * this.shipping.ctuPrice;
    this.shipping.usaUsd = this.convertYuanToUsd(this.shipping.usaYuan);
  }

  // Calculate USA to Vzla
  setTotalUsaToVzla() {
    const grandWeight = this.calculateBiggestWeight();
    this.shipping.vzlaUsd = this.shipping.utvPrice * grandWeight;
    this.shipping.vzlaYuan = this.convertUsdToYuan(this.shipping.vzlaUsd);
  }

  // Set Grand totals
  setGrandTotals() {
    this.shipping.yuanGrandTotal = this.shipping.purchaseYuan + this.shipping.usaYuan + this.shipping.vzlaYuan;
    this.shipping.usdGrandTotal = this.shipping.purchaseUsd + this.shipping.usaUsd + this.shipping.vzlaUsd;
  }

  // Set amount to yuan
  setChangeYuan() {
    this.initialPoint();
  }

  // Set amount to USD
  setChangeUsd() {
    this.initialPoint();
  }

  // Calculate unit final cost in vzla
  setUnitCost() {
    this.shipping.unitCostUsd = this.shipping.usdGrandTotal / this.shipping.quantities;
    this.shipping.unitCostYuan = this.convertUsdToYuan(this.shipping.unitCostUsd);
  }

  // Clear all fields
  clearAllFields() {
    this.shipping = new Shipping();
  }
}
