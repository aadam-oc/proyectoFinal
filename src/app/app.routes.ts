import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { HeroLoginComponent } from './components/hero-login/hero-login.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
 import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';

export const appRoutes: Routes = [
  { path: '', component: HeroComponent, canActivate: [AuthGuard] }, // Ruta protegida
  { path: 'login', component: HeroLoginComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, // Ruta protegida
  { path: '**', redirectTo: '' } // Redirige rutas no encontradas al inicio
];
