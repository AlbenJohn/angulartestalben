import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServices } from 'src/app/services/apiservices';

@Component({
  selector: 'app-updateemp',
  templateUrl: './updateemp.component.html',
  styleUrls: ['./updateemp.component.scss']
})
export class UpdateempComponent implements OnInit {
  public employeeForm:FormGroup;

  constructor(public fb:FormBuilder,private api:ApiServices,private router:Router) { }

  ngOnInit(): void {
    this.createforms()
  }
  get employeformCtrls():any{
    return this.employeeForm.controls;
   }

   private createforms():void {
    this.employeeForm = this.fb.group({
       email:["",[Validators.required,Validators.email]],
       phonenumber:["",[Validators.required,Validators.minLength(10),Validators.maxLength(10)]]
     })
   }
   addbutton(){

   }

}
