
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  RoleOption,
  CenterOption
} from '../models/auth.models';

@Injectable({ providedIn: 'root' })
export class RegistrationOptionsService {

  private readonly baseUrl =
    'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  getRoles(): Observable<RoleOption[]> {
    return this.http.get<RoleOption[]>(
      `${this.baseUrl}/roles`
    );
  }

  getCenters(): Observable<CenterOption[]> {
    return this.http.get<CenterOption[]>(
      `${this.baseUrl}/centers`
    );
  }
}