import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isIncorrectUserName = false;
  isIncorrectPassword = false;
  isInvalidLogin = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get userNameControler(): any { return this.loginForm.get('userName'); }
  get passwordControler(): any { return this.loginForm.get('password'); }

  get isRequiredUserName(): boolean {
    if (this.userNameControler.touched && !this.userNameControler.value) {
      return true;
    } else {
      return false;
    }
  }

  get isRequiredPassword(): boolean {
    if (this.passwordControler.touched && !this.passwordControler.value) {
      return true;
    } else {
      return false;
    }
  }

  get isFormFilled(): boolean {
    if (this.passwordControler.value && this.userNameControler.value) {
      return true;
    } else {
      return false;
    }
  }

  submit(): void {
    if ((this.userNameControler.value && this.userNameControler.value == "admin")
      && (this.passwordControler.value && this.passwordControler.value == "admin")) {
      this.isInvalidLogin = false;
      this.router.navigate(['/todo']);

    } else {
      this.isInvalidLogin = true;
    }
  }

  clearForm(): void {
    this.loginForm.reset();
    this.isInvalidLogin = false;
  }

}
