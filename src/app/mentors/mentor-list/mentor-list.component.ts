import { Component, OnInit } from '@angular/core';
import { IMentor } from 'src/app/models/models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.css']
})
export class MentorListComponent implements OnInit {
  public columnNames = ['name', 'surname', "email", "company"];
  public mentors: IMentor[];

  constructor(private service: ApiService) { }

  ngOnInit() {
    this.service.getMentors().subscribe((value) => {
      this.mentors = value;
    })
  }

}
