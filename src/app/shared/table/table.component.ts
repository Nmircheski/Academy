import { Component, Input, OnInit } from '@angular/core';
import { ITableConfiguration } from '../models/interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() public columnNames: string[];
  @Input() public items: any[];

  constructor() { }

  ngOnInit() {
  }

}
