import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse, AuthService, RegisterRequest } from '@core';

@Injectable({ providedIn: 'root' })
export class RegisterService {
  constructor(private authService: AuthService) {}

  register(payload: RegisterRequest): Observable<AuthResponse> {
    return this.authService.register(payload);
  }
}
