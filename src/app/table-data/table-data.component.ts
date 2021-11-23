import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend/backend.service';
import { TableMetadata } from '../data/table-metadata';
import { TableResponse } from '../data/table-response';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {
  "metaData": TableMetadata[];
  "rows": string[][];
  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.metaData = this.backendService.tableResponse.metaData;
    this.rows = this.backendService.tableResponse.rows;
  }

}
