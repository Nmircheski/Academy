import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './components/course-details/course-details.component';

import { CourseListComponent } from './components/course-list/course-list.component';


const routes: Routes = [
  { path: '', component: CourseListComponent },
  {
    path: ':id',
    component: CourseDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
