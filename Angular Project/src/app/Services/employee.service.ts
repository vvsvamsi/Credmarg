import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8081/api/employees';

  constructor(private http: HttpClient) { }

  addEmployee(employee: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, employee);
  }

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
