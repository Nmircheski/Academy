import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICourse } from 'src/app/models/models';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseDetailsComponent implements OnInit {
  public columnNames = ['name', 'surname', "email"];
  public courseInfo: ICourse;

  constructor(private service: LocalService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let courseId = this.activatedRoute.snapshot.params.id;
    this.courseInfo = this.service.getCourse(courseId);
  }

}
