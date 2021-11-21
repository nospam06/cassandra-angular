import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private backendUrl = 'http://localhost:8080/api/cassandra';  // URL to web api

  constructor() { }
}
