import { Component, OnInit } from '@angular/core';
import { LocalService } from '../services/local.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private service: LocalService) { }

  ngOnInit() {
    this.service.getCourses();
  }

}
