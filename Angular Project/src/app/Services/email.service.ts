import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'http://localhost:8081/api/emails';

  constructor(private http: HttpClient) { }

  sendEmail(email: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, email);
  }

  getSentEmails(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
