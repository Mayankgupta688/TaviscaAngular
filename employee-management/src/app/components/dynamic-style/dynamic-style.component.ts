import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dynamic-style',
  templateUrl: './dynamic-style.component.html',
  styleUrls: ['./dynamic-style.component.less']
})
export class DynamicStyleComponent implements OnInit {

  counter: number = 0;
  constructor() {
    setInterval(() => {
      this.counter = this.counter + 1;
    }, 1000)
  }

  returnOddOrEven() {
    if(this.counter % 2 === 0) {
      return "even"
    } return "odd";
  }

  ngOnInit(): void {
  }

}
