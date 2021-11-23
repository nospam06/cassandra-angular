import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend/backend.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tables: string[] = [];

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.tables = this.backendService.keyspaceResponse.tables;
  }

  data(keyspace: string): void {
  }
}
