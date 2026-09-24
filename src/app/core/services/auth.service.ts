
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  UserResponse
} from '../models/auth.models';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly baseUrl =
    'http://localhost:8080/api/v1/auth';

  constructor(private http: HttpClient) {}

  login(data: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.baseUrl}/login`,
      data
    ).pipe(tap(result => this.saveSession(result)));
  }

  register(
    data: RegisterRequest
  ): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.baseUrl}/register`,
      data
    ).pipe(tap(result => this.saveSession(result)));
  }

  me(): Observable<UserResponse> {
    return this.http.get<UserResponse>(
      `${this.baseUrl}/me`
    );
  }

  getToken(): string | null {
    return sessionStorage.getItem('tvms_token');
  }

  getUser(): UserResponse | null {
    const raw = sessionStorage.getItem('tvms_user');

    if (!raw) return null;

    try {
      return JSON.parse(raw) as UserResponse;
    } catch {
      return null;
    }
  }

  logout(): void {
    sessionStorage.removeItem('tvms_token');
    sessionStorage.removeItem('tvms_user');
  }

  private saveSession(result: AuthResponse): void {
    sessionStorage.setItem(
      'tvms_token',
      result.token
    );

    sessionStorage.setItem(
      'tvms_user',
      JSON.stringify(result.user)
    );
  }
}