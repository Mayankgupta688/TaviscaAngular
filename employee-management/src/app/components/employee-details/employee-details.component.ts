import { Component } from '@angular/core';
import IEmployee from 'src/app/interfaces/IEmployee';
import EmployeeService from 'src/app/services/employee.service';

@Component({
  selector: 'employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.less']
})
export class EmployeeDetailsComponent {
  image: string = "https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg";
  employeeData: IEmployee[] = [];
  masterEmployeeData: IEmployee[] = [];
  
  filterText = "";

  constructor(private _employeeService: EmployeeService) {
    this.employeeData = this._employeeService.employees;
    this.masterEmployeeData = this._employeeService.employees;
    this._employeeService.getEmployeeList();

    this._employeeService.employeeEventEmitter.subscribe((data) => {
      if(data.employee.length) {
        this.employeeData = data.employee;
        this.masterEmployeeData = data.employee;
      }
    })
  } 

  filterList(inputValue: any) {
    this.employeeData = this.masterEmployeeData.filter((employee) => {
      return employee.name.indexOf(inputValue) > -1;
    })
  }

  deleteEmployee(id: string, name: string, employeeObject: IEmployee, index: number) {
    this._employeeService.employees.splice(index, 1);
  }

  deleteEmployeeImmutable(deletedEmployeeId: string) {
    this._employeeService.deleteEmployee(deletedEmployeeId);
  }
}
