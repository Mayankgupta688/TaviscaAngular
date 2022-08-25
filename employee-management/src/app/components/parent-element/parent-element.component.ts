import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'parent-element',
  templateUrl: './parent-element.component.html',
  styleUrls: ['./parent-element.component.less']
})
export class ParentElementComponent {
  userName: string = "TechnoFunnel";

  updateUserName() {
    this.userName = 'Anshul';
  }

}
