import { Injectable } from '@angular/core';
import { ICourse } from '../models/models';
import * as data from './data/db.json';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  public getCourses() :ICourse[] {
    return (data as any).default.courses;
  }

  public getCourse(courseId : number) :ICourse {
    return (data as any).default.courses[courseId - 1];
  }
}
