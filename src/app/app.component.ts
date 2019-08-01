import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public usdYuan = 6.9;
  public yuanUsd = 0.14;

  // Package Information
  public price = 0;
  public weight = 0;
  public quantities = 0;

  // Measurements Information
  public width = 0;
  public large = 0;
  public height = 0;
  public volumetricWeight = 0;

  // China to USA price
  public ctuPrice = 0;

  // USA to Venezuela price
  public utvPrice = 0;

  // Totals
  private purchaseYuan = 0;
  private purchaseUsd = 0;
  private usaYuan = 0;
  private usaUsd = 0;
  private vzlaYuan = 0;
  private vzlaUsd = 0;
  private usdGrandTotal = 0;
  private yuanGrandTotal = 0;
  private bsGrandTotal = 0;

}
