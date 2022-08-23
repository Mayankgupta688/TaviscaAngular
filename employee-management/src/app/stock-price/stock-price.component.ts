import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stock-price',
  templateUrl: './stock-price.component.html',
  styleUrls: ['./stock-price.component.less']
})
export class StockPriceComponent {

  stockPrice: number = 0;
  constructor(private _http: HttpClient) { 
    setInterval(() => {
      this._http.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/MC20").subscribe((response: any) => {
        this.stockPrice = response['data']['pricecurrent'];
      })
    }, 5000);
  }

}
