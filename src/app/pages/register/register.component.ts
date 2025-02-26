import { Component } from '@angular/core';
import { RegisterFormComponent } from '@entities/auth/ui/register-form/register-form.component';
@Component({
  selector: 'app-register',
  imports: [RegisterFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {}
