import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'child-element',
  templateUrl: './child-element.component.html',
  styleUrls: ['./child-element.component.less']
})
export class ChildElementComponent implements OnInit, OnChanges, OnDestroy {

  @Input() inputUserName: any;

  constructor() {
    debugger
  }

  ngOnChanges(data: SimpleChanges) {
    debugger;
    console.log("Data Updated...")
  }

  ngOnInit(): void {
    debugger
  }

  ngOnDestroy() {
    // Function called when component is destroyed...
  }

}
