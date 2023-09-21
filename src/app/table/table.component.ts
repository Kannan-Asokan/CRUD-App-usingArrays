import { Component } from '@angular/core';
import { EmployeeService } from '../Service/employee.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  constructor(public dataArray: EmployeeService) {}
  delete(i: any) {
    this.dataArray.Datalist.map((value, index) => {
      if (index == i) {
        this.dataArray.Datalist.splice(i, 1);
      }
    });
  }
}
