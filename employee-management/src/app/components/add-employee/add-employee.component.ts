import { Component, OnInit } from '@angular/core';
import EmployeeService from 'src/app/services/employee.service';

@Component({
  selector: 'add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.less']
})
export class AddEmployeeComponent implements OnInit {

  public userName: string = "";
  public userId: string = "";
  public userCreatedAt: string = "";
  public userAvatar: string = "";

  public errorMessage: string = "";

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.errorAddingEmployeeEventEmitter.subscribe(() => {
      this.errorMessage = "Error Adding Employee To Database";

      setTimeout(() => {
        this.errorMessage = "";
        this.clearTextbox();
      }, 5000)
    })

    this._employeeService.successAddingEmployeeEventEmitter.subscribe(() => {
      this.errorMessage = "Employee Added Successfully";
    })
  }

  clearTextbox() {
    this.userName = "";
    this.userId = "";
    this.userCreatedAt = "";
    this.userAvatar = "";
  }

  addEmployee() {
    var returnedObsrervable = this._employeeService.addEmployee({
      name: this.userName,
      id: this.userId,
      createdAt: this.userCreatedAt,
      avatar: this.userAvatar
    })
    
    returnedObsrervable.subscribe({
      next: (response) => {
        this.errorMessage = "Success"
      }, error: (error) => {
        this.errorMessage = "Failed"
      }
    })
  }

}
