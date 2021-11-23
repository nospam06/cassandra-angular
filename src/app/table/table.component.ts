import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend/backend.service';
import { TableRequest } from '../data/table-request';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tableRequest: TableRequest = { "sessionUuid": "", "keyspace": "", "table": ""};
  tables: string[] = [];

  constructor(private backendService: BackendService,
    private router: Router) { }

  ngOnInit(): void {
    this.tables = this.backendService.keyspaceResponse.tables;
    this.tableRequest.sessionUuid = this.backendService.sessionResponse.sessionUuid;
    this.tableRequest.keyspace = this.backendService.keyspaceResponse.keyspace;
  }

  data(table: string): void {
    this.tableRequest.table = table;
    this.backendService.queryTable(this.tableRequest)
    .subscribe(r => {
      this.backendService.tableResponse = r;
      this.next();
    });
  }

  next(): void {
    this.router.navigateByUrl("/table-data")
  }
}
