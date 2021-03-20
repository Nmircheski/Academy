import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-preview',
  templateUrl: './course-preview.component.html',
  styleUrls: ['./course-preview.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursePreviewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public handleViewDetailsClicked() {
    //TODO ID
    this.router.navigate(['/courses', 1]);
  }
}
