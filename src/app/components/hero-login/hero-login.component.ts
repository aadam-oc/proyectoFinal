import { Component } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-hero-login',
  imports: [LoginFormComponent],
  templateUrl: './hero-login.component.html',
  styleUrl: './hero-login.component.css'
})
export class HeroLoginComponent {
  title = 'HeroLogin'
}
