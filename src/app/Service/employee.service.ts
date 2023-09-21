import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
  constructor() {}
  Datalist: any[] = [];
  newList: any[] = [];
  isEdit: boolean = false;
  editIndex!: number;
  editData: boolean = false;

  edit(data: any) {
    this.Datalist.map((value, index) => {
      if (index == data) {
        this.newList.push(value);
      }
    });

    this.isEdit = true;
    this.editIndex = data;
    this.editData = true;
  }
}
