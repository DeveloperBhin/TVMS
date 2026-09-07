import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse, AuthService, RegisterRequest } from '@core';

@Injectable({ providedIn: 'root' })
export class AddActivitySuccessService {
  constructor(private authService: AuthService) {}

  register(payload: RegisterRequest): Observable<AuthResponse> {
    return this.authService.register(payload);
  }
}
