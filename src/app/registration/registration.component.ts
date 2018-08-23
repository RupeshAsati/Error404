import { Component, OnInit } from '@angular/core';
import { AbstractControl,FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  genderList: String[];
     registration : FormGroup; 
  constructor(private fb: FormBuilder) {
   }

  ngOnInit() {
    
    this.genderList =  ['Male', 'Female', 'Others'];
    this.registration = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      mobileNo:['',Validators.required],
      address:['',Validators.required],
      email: ['', [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      passwords: this.fb.group({
      pwd: ['', [Validators.required,Validators.minLength(8)]],
      confirmPwd: ['', [Validators.required,Validators.minLength(8)]]
    },{validator: this.passwordConfirming}),
    gender: ['', Validators.required],
    terms: ['', Validators.requiredTrue]

    })
  }
  get firstName(){return this.registration.get('firstName');}
  get lastName(){return this.registration.get('lastName');}
  get mobileNo(){return this.registration.get('mobileNo');}
  get address(){return this.registration.get('address');}
  get email() { return this.registration.get('email'); }
  get passwords() { return this.registration.get('passwords'); }
  get gender() { return this.registration.get('gender'); }
  get country() { return this.registration.get('country'); }
  get terms() { return this.registration.get('terms'); }
  public passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('pwd').value !== c.get('confirmPwd').value) {
      return { invalid: true };
    }
  }
  public onFormSubmit() {
    if(this.registration.valid) {
      console.log(this.registration.value);
    }
  }
}
