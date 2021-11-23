import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend/backend.service';
import { KeyspaceRequest } from '../data/keyspace-request';
import { KeyspaceResponse } from '../data/keyspace-response';

@Component({
  selector: 'app-keyspace',
  templateUrl: './keyspace.component.html',
  styleUrls: ['./keyspace.component.css']
})
export class KeyspaceComponent implements OnInit {
  keyspaceRequest: KeyspaceRequest = {"sessionUuid": "", "keyspace": ""};
  keyspaceResponse: KeyspaceResponse | undefined;
  keyspaces: string[] = [];

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.keyspaceRequest.sessionUuid = this.backendService.sessionResponse.sessionUuid;
    this.keyspaces = this.backendService.sessionResponse.keyspaces;
  }

  tables(keyspace: string): void {
    this.keyspaceRequest.keyspace = keyspace;
    this.backendService.listTables(this.keyspaceRequest)
      .subscribe(r => {
        this.keyspaceResponse = r;
        this.backendService.keyspaceResponse = r;
      });
  }

}
