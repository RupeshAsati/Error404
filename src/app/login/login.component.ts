import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl,FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  login = new FormGroup({
    login : new  FormControl,
    password: new FormControl,
    rem: new FormControl,
    remsignup: new FormControl,
    remforgotpawd: new FormControl
  });
  

  constructor() { }

  ngOnInit() {
  }
 
}
