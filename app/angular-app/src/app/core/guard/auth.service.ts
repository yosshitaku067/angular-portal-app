import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authed = !environment.production;

  constructor() {}

  isAuthenticated(): boolean {
    return this.authed;
  }

  login(auth: { user: string; password: string }): boolean {
    if (environment.production) {
      if (auth.user === 'portal' && auth.password === 'app') {
        this.authed = true;
      }
    }

    return this.authed;
  }
}
