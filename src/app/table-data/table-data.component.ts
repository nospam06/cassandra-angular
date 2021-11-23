import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend/backend.service';
import { TableRequest } from '../data/table-request';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {
tableRequest: TableRequest = {};
  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
  }

}
