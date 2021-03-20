import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public apiUrl = '/api';

  //TODO add models
  constructor(private http: HttpClient) { }

  public getCourses() {
   return this.http.get(`${this.apiUrl}/courses`);
  }

  public getCourse(id: number) {
    return this.http.get(`${this.apiUrl}/courses/${id}`);
  }

  public getMentors() {
    return this.http.get(`${this.apiUrl}/mentors`);
  }
}
