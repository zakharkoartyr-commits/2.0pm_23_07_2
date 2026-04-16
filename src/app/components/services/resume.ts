import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ResumeService {
  private apiUrl = 'http://localhost:3000/api/resume';

  constructor(private http: HttpClient) {}

  getResumeData(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/resume');
  }
}