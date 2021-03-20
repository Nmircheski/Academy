import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/models/models';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-courses',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public courses : ICourse[];

  constructor(private service: LocalService) { }

  ngOnInit() {
    this.courses = this.service.getCourses();
  }

}
