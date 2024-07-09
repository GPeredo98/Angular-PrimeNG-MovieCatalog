import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user: string = '';
  password: string = '';

  constructor(private _router: Router) {}

  public login(): void {
    localStorage.setItem('loggedIn', 'true');
    this._router.navigate(['/']);
  }
}
