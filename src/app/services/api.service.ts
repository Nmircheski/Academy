import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICourse, IMentor } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public apiUrl = '/api';

  //TODO add models
  constructor(private http: HttpClient) { }

  public getCourses() : Observable<ICourse[]> {
   return this.http.get<ICourse[]>(`${this.apiUrl}/courses`);
  }

  public getCourse(id: number) : Observable<ICourse> {
    return this.http.get<ICourse>(`${this.apiUrl}/courses/${id}`);
  }

  public getMentors() : Observable<IMentor[]> {
    return this.http.get<IMentor[]>(`${this.apiUrl}/mentors`);
  }
}
