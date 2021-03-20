import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public courses = [
    {
      name: 'course1'
    },
    {
      name: 'course2'
    },
    {
      name: 'course3'
    },
    {
      name: 'course4'
    },
    {
      name: 'course5'
    },
    {
      name: 'course6'
    },
    {
      name: 'course7'
    },
    {
      name: 'course8'
    },
    {
      name: 'course9'
    },
    {
      name: 'course10'
    },
    {
      name: 'course11'
    },
    {
      name: 'course12'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
