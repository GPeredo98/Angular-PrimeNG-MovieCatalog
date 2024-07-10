import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({transform: 'translateY(20%)', opacity: 0}),
        animate('0.5s ease-in', style({transform: 'translateY(0)', opacity: 1}))
      ])
    ])
  ]
})
export class LoginComponent {
  user: string = '';
  password: string = '';
  constructor(private _router: Router) { }

  public login(): void {
    localStorage.setItem('loggedIn', 'true');
    this._router.navigate(['/']);
  }
}
