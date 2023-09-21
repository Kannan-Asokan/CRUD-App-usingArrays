import { Component, DoCheck } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../Service/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements DoCheck {
  constructor(
    private dataArray: EmployeeService,
    private route: ActivatedRoute
  ) {}

  index!: number;

  myform = new FormGroup({
    Firstname: new FormControl(''),
    Lastname: new FormControl(''),
    Email: new FormControl(''),
    Gender: new FormControl(''),
    DateOfJoined: new FormControl(''),
    Role: new FormControl(''),
  });

  ngDoCheck() {
    this.index = this.dataArray.editIndex;
    if (this.dataArray.isEdit) {
      this.myform = new FormGroup({
        Firstname: new FormControl(
          this.dataArray.newList[this.index].Firstname
        ),
        Lastname: new FormControl(this.dataArray.newList[this.index].Lastname),
        Email: new FormControl(this.dataArray.newList[this.index].Email),
        Gender: new FormControl(this.dataArray.newList[this.index].Gender),
        DateOfJoined: new FormControl(
          this.dataArray.newList[this.index].DateOfJoined
        ),
        Role: new FormControl(this.dataArray.newList[this.index].Role),
      });
      this.dataArray.isEdit = false;
      this.dataArray.newList.pop();
    }
  }
  onSubmit() {
    if (this.dataArray.editData) {
      console.log(this.myform);
      this.dataArray.Datalist[this.index] = this.myform.value;
      this.myform.reset();
      this.dataArray.editData = false;
    } else {
      if (this.myform.valid) {
        this.dataArray.Datalist.push(this.myform.value);
        this.myform.reset();
      } else {
        alert('Please Enter the Details');
      }
      /* this.dataArray.check(); */
    }
  }
}

//this.service.array[i]=myform.value
