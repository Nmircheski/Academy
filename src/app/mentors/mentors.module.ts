import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorListComponent } from './mentor-list/mentor-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes : Routes = [
  {
    path: '', component: MentorListComponent
  }
]

@NgModule({
  declarations: [MentorListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class MentorsModule { }
