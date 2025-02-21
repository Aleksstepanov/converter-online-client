import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
    });
  }

  private handleError(err: HttpErrorResponse) {
    console.error('Api Error: ', err);
    return throwError(() => new Error(err?.message || 'Api Error'));
  }

  get<T>(url: string, params?: any): Observable<T> {
    return this.httpClient
      .get<T>(`${this.apiUrl}${url}`, { headers: this.getHeaders(), params })
      .pipe(catchError(this.handleError));
  }

  post<T>(url: string, body: any, params?: any): Observable<T> {
    return this.httpClient
      .post<T>(`${this.apiUrl}${url}`, body, {
        headers: this.getHeaders(),
        params,
      })
      .pipe(catchError(this.handleError));
  }

  put<T>(url: string, body: any, params?: any): Observable<T> {
    return this.httpClient
      .put<T>(`${this.apiUrl}${url}`, body, {
        headers: this.getHeaders(),
        params,
      })
      .pipe(catchError(this.handleError));
  }

  delete<T>(url: string, params?: any): Observable<T> {
    return this.httpClient
      .delete<T>(`${this.apiUrl}${url}`, { headers: this.getHeaders(), params })
      .pipe(catchError(this.handleError));
  }

  postForm<T>(url: string, formData: FormData, params?: any): Observable<T> {
    return this.httpClient
      .post<T>(`${this.apiUrl}${url}`, formData, {
        headers: new HttpHeaders({
          Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
        }),
        params,
      })
      .pipe(catchError(this.handleError));
  }
}
