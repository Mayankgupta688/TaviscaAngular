import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.less']
})
export class ReactiveFormComponent {

  employeeForm: FormGroup = this.fb.group({
    userName: ["Mayank", Validators.required],
    userId: [0, [Validators.min(1000), Validators.required]],
    userCreatedAt: ["Today"],
    userAvatar: ["https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg"]
  })

  constructor(private fb: FormBuilder) { 
    debugger;
    this.employeeForm.get("userName")?.valueChanges.subscribe(() => {
      debugger;
      console.log("User Name Updated.....")
    })

    this.employeeForm.addControl("userSalary", new FormControl("", [Validators.required]))
  }

  submitFormData() {
    debugger;
    debugger;
  }

}
