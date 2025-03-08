import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {UserAuthenticationController} from '../../core/controllers/user-authentication.controller';
import {UserLoginModel} from '../../core/models/user-auth.model';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-log-in',
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './log-in-form.component.html',
  standalone: true,
  styleUrl: './log-in-form.component.css'
})
export class LogInFormComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userAuthController: UserAuthenticationController) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  doLogIn() {
    this.userAuthController.userLogin(this.loginForm.value);
  }
}
