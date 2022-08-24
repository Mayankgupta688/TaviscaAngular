import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'filter-employee',
  templateUrl: './filter-employee.component.html',
  styleUrls: ['./filter-employee.component.less']
})
export class FilterEmployeeComponent implements OnInit {
  filterText: string = "";

  @Output() onFilterText: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  filterList(filterValue: string) {
    debugger;
    this.onFilterText.emit(filterValue)
  }

}
