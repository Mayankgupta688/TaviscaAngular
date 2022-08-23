import { Component, OnInit } from '@angular/core';
import EmployeeService from 'src/app/services/employee.service';

@Component({
  selector: 'employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.less']
})
export class EmployeeCountComponent {
  public employeeCount = 0

  constructor(public _employeeService: EmployeeService) {
    this.employeeCount = this._employeeService.employees.length;

    this._employeeService.employeeEventEmitter.subscribe((data) => {
      debugger;
      if(data.employee.length) {
        this.employeeCount = data.employee.length;
      }
    })
  }
}
