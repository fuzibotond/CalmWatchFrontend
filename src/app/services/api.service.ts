import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseUrl = 'https://calmwatch-production.up.railway.app';

  constructor(private http: HttpClient) {}

  getLogin(): Observable<any> {
    return this.http.get(`${this.baseUrl}/login`);
  }
  getProfile(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/profile`);
  }

  getPanicAttacks(startDate: string, endDate: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/get-panic-attacks?start_date=${startDate}&end_date=${endDate}`);
  }

  confirmPanicAttack(panicId: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/api/confirm-panic-attack/${panicId}`, {});
  }

  getSleepTracker(date: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/sleep-tracker?date=${date}`);
  }

  getSleepQuality(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/sleep-quality`);
  }

  getHeartRate(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/heart-rate`);
  }

  getAlertHistory(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/alert-history`);
  }
}
