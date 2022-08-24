import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import IEmployee from "../interfaces/IEmployee";
import { tap, map, scan } from 'rxjs/operators';
import { Observable } from "rxjs";
import { isNgTemplate } from "@angular/compiler";

@Injectable({
    providedIn: "root"
})
export default class EmployeeService {
    public employees: IEmployee[] = []

    constructor(private _http: HttpClient) { }

    public employeeEventEmitter = new EventEmitter();
    public errorAddingEmployeeEventEmitter = new EventEmitter();
    public successAddingEmployeeEventEmitter = new EventEmitter();

    getEmployeeList() {
        this._http.get("http://localhost:4000/employees").pipe(

            tap((data: any) => {
                data.map((employee: any) => {
                    console.log(employee.avatar);
                });
            }),
            map((data: any) => {
                var newData = data.map((employee: any) => {
                    employee.avatar = "Hello";
                    return employee;
                });
                return newData;
            })
        ).subscribe((response: any) => {
            debugger;
            this.employees = response;
            
            this.employeeEventEmitter.emit({
                employee: this.employees,
                dept: "HR"
            })
        })
    }

    deleteEmployee(empId: string) {
        this._http.delete("http://localhost:4000/employees/" + empId, {
            headers: {
               orgName: "TechnoFunnel" 
            }
        }).subscribe({
            next: () => {
                this.employees = this.employees.filter((employee) => {
                    return +employee.id !== +empId;
                });

                this.employeeEventEmitter.emit({
                    employee: this.employees,
                    dept: "HR"
                });
            },
            error: (error) => {
                alert("Delete Not Successful")
            }, 
            complete: () => {
                alert("Request Complete")
            }
        }); 
    }

    addEmployee(employeeDetails: IEmployee): Observable<any> {
        return this._http.post("http://localhost:4000/employees", employeeDetails).pipe(
            tap(() => {
                this.getEmployeeList()
            })
        )
    }
}