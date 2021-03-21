import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourse } from 'src/app/models/models';

@Component({
  selector: 'app-course-preview',
  templateUrl: './course-preview.component.html',
  styleUrls: ['./course-preview.component.css'],
})
export class CoursePreviewComponent implements OnInit {

  @Input()
  public course: ICourse;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public handleViewDetailsClicked(courseId: number) {
    this.router.navigate(['/courses', courseId]);
  }
}
