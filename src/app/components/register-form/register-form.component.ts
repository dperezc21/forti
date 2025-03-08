import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {UserAuthenticationController} from '../../core/controllers/user-authentication.controller';

@Component({
  selector: 'app-register-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './register-form.component.html',
  standalone: true,
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userAuthController: UserAuthenticationController) {}

  registerUser() {
    this.userAuthController.register(this.registerForm.value);
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      surnames: new FormControl('', [Validators.required]),
      birthDay: new FormControl('', [Validators.required]),
      profilePhoto: new FormControl('', [Validators.required])
    });
  }
}
