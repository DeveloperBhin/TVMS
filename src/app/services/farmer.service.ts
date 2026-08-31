import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({ providedIn: 'root' })
export class FarmerService {
  private readonly endpoint = `${environment.apiUrl}/farmers`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.endpoint);
  }

  getById(id: number | string): Observable<any> {
    return this.http.get<any>(`${this.endpoint}/${id}`);
  }

  create(payload: any): Observable<any> {
    return this.http.post<any>(this.endpoint, payload);
  }

  update(id: number | string, payload: any): Observable<any> {
    return this.http.put<any>(`${this.endpoint}/${id}`, payload);
  }

  delete(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.endpoint}/${id}`);
  }
}
