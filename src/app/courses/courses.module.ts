import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CoursePreviewComponent } from './components/course-preview/course-preview.component';
import { SharedModule } from '../shared/shared.module';
import { TimePipe } from './pipes/time.pipe';


@NgModule({
  declarations: [CourseListComponent, CourseDetailsComponent, CoursePreviewComponent, TimePipe],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule
  ],
})
export class CoursesModule { }
