import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/components/login/login.component';
import { RegisterComponent } from './app/components/register/register.component';
import { HomeComponent } from './app/components/home/home.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'home', component: HomeComponent},
      { path: '', redirectTo: 'register', pathMatch: 'full' },
    ]),
    provideHttpClient(),
    importProvidersFrom(ReactiveFormsModule),
  ],
}).catch(err => console.error(err));
