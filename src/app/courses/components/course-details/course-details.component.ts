import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICourse } from 'src/app/models/models';
import { ApiService } from 'src/app/services/api.service';
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

  constructor(private service: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let courseId = this.activatedRoute.snapshot.params.id;
    this.service.getCourse(courseId).subscribe((value)=>{
      this.courseInfo = value;
    });
  }

}
