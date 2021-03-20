import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseDetailsComponent implements OnInit {
  public columnNames = ['name', 'lastname'];
  public items = [
    {
      name: 'Nikola',
      lastname: 'Mircheski'
    },
    {
      name: 'Nikola',
      lastname: 'Mircheski'
    }
  ];

  public courseInfo: any;
  constructor() { }

  ngOnInit() {
  }

}
