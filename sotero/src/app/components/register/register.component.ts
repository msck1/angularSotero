import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
      <label for="username">Username:</label>
      <input id="nome" formControlName="nome" type="text" />

      <label for="email">Email:</label>
      <input id="email" formControlName="email" type="email" />

      <label for="password">Password:</label>
      <input id="senha" formControlName="senha" type="password" />

      <button type="submit">Register</button>
    </form>
  `,
  styles: [],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(response => {
        console.log('User registered:', response)
        this.router.navigate(['/login']);
      });
    }
  }
}
