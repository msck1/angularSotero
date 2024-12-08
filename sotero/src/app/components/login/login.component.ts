import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <label for="email">Email:</label>
      <input id="email" formControlName="email" type="email" />

      <label for="password">Password:</label>
      <input id="senha" formControlName="senha" type="password" />

      <button type="submit">Login</button>
    </form>
  `,
  styles: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(response => {
        console.log('User logged in:', response)
        this.router.navigate(['/home']) // rota do home aqui
      });
    }
  }
}
