import { Injectable } from '@angular/core';
import { AuthService, RegisterRequest } from '@core';

@Injectable({ providedIn: 'root' })
export class RegisterService {
  constructor(private authService: AuthService) {}

  register(payload: RegisterRequest): ReturnType<AuthService['register']> {
    return this.authService.register(payload);
  }
}
