import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  dynamicFormArray: any;
  registrationForm!: FormGroup;

  constructor(private httpClient: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void {

    // se incializa vacio
    this.registrationForm = this.fb.group({});

    this.httpClient.get('assets/D-Form/DynamicForm.json').subscribe(data => {
      this.dynamicFormArray = data;
      this.createFormControl();
    });
  }


  createFormControl(): void {
    // recorre el array para ir creando los controles
    this.dynamicFormArray.forEach((element: any) => {
      this.registrationForm.addControl(element.ID, new FormControl(''));
    });
   // console.log(this.registrationForm);
  }


}
