import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './log-in-form.component.html',
  standalone: true,
  styleUrl: './log-in-form.component.css'
})
export class LogInFormComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  doLogIn() {
    console.log(this.loginForm.value);
  }
}
