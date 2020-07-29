import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = { isAdmin: true };
  constructor() {}

  checkPermissions() {
    return of(this.user.isAdmin);
  }

  isLoggedIn(){
    return of(false);
  }

}
