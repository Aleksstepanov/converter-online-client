import { Component } from '@angular/core';
import { LoginFormComponent } from '@entities/auth/ui/login-form/login-form.component';
@Component({
  selector: 'app-login',
  imports: [LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
})
export class LoginComponent {}
