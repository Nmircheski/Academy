import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursePreviewComponent } from './course-preview/course-preview.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CourseListComponent, CourseDetailsComponent, CoursePreviewComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule
  ]
})
export class CoursesModule { }
