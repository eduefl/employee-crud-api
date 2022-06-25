import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-emplyee-add',
  templateUrl: './emplyee-add.component.html',
  styleUrls: ['./emplyee-add.component.css']
})
export class EmplyeeAddComponent implements OnInit {

  employeeForm !: FormGroup ;
    constructor(private formBuilder: FormBuilder) {
      this.createForm();
     }

     createForm(): void {
      this.employeeForm = this.formBuilder.group({
        employeeName:         ['', Validators.required],
        jobRole:              ['', Validators.required],
        salary:               ['', Validators.required],
        dateBirth:            ['', Validators.required],
        employeeRegistration: ['', Validators.required]
      });
     }

  ngOnInit(): void {
  }

}
