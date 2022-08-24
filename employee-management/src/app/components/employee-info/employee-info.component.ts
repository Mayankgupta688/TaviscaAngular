import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import IEmployee from 'src/app/interfaces/IEmployee';

@Component({
  selector: 'employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.less']
})
export class EmployeeInfoComponent {

  @Input() empInfo: any;
  @Input() image: string = "";

  @Output() onDeleteEmployeeImmutable: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  deleteEmployee(empId: string) {
    debugger;
    this.onDeleteEmployeeImmutable.emit(empId)
  }

}
