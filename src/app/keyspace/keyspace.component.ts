import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend/backend.service';
import { KeyspaceRequest } from '../data/keyspace-request';

@Component({
  selector: 'app-keyspace',
  templateUrl: './keyspace.component.html',
  styleUrls: ['./keyspace.component.css']
})
export class KeyspaceComponent implements OnInit {
  keyspaceRequest: KeyspaceRequest = {"sessionUuid": "", "keyspace": ""};
  keyspaces: string[] = [];

  constructor(private backendService: BackendService,
    private router: Router) { }

  ngOnInit(): void {
    this.keyspaceRequest.sessionUuid = this.backendService.sessionResponse.sessionUuid;
    this.keyspaces = this.backendService.sessionResponse.keyspaces;
  }

  tables(keyspace: string): void {
    this.keyspaceRequest.keyspace = keyspace;
    this.backendService.listTables(this.keyspaceRequest)
      .subscribe(r => {
        this.backendService.keyspaceResponse = r;
        this.next();
      });
  }

  next(): void {
    this.router.navigateByUrl("/table")
  }
}
