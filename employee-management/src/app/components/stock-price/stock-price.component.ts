import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stock-price',
  templateUrl: './stock-price.component.html',
  styleUrls: ['./stock-price.component.less']
})
export class StockPriceComponent {

  stockPrice: number = 0;
  colorProperty: string = "markGreen";

  constructor(private _http: HttpClient) { 
    setInterval(() => {
      fetch("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/MC20").then((response: any) => {
        if(+this.stockPrice > +response['data']['pricecurrent']) {
          this.colorProperty = "markRed";
        } else {
          this.colorProperty = "markGreen";
        }

        this.stockPrice = response['data']['pricecurrent'];
      })
    }, 5000);
  }

}
