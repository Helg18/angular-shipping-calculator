export class Shipping {
  // 1 USD = xx YUAN
  usdYuan = 6.9;

  // 1 YUAN = xx USD
  yuanUsd = 0.14;

  // Package Information
  price: number;
  weight: number;
  quantities = 1;

  // Measurements Information
  width: number;
  large: number;
  height: number;
  volumetricWeight: number;

  // China to USA price
  ctuPrice: number;

  // USA to Venezuela price
  utvPrice: number;

  // Totals
  purchaseYuan: number;
  purchaseUsd: number;
  usaYuan: number;
  usaUsd: number;
  vzlaYuan: number;
  vzlaUsd: number;
  usdGrandTotal: number;
  yuanGrandTotal: number;
  totalWeight: number;
  totalVolumetricWeight: number;
  unitCostUsd: number;
  unitCostYuan: number;
}
