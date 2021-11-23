import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { SessionRequest } from '../data/session-request';
import { SessionResponse } from '../data/session-response';
import { KeyspaceRequest } from '../data/keyspace-request';
import { KeyspaceResponse } from '../data/keyspace-response';
import { TableRequest } from '../data/table-request';
import { TableResponse } from '../data/table-response';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private backendUrl = 'http://localhost:8080/api/cassandra';  // URL to web api
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  sessionResponse: SessionResponse = {"sessionUuid": "", "keyspaces": []};
  keyspaceResponse: KeyspaceResponse = {"keyspace": "", "tables": []};
  //tableResponse: TableResponse = {"table": "", "metaData": null, "rows": []};

  constructor(
    private http: HttpClient,) { }

  login(sessionRequest: SessionRequest): Observable<SessionResponse> {
    return this.http.post<SessionResponse>(this.backendUrl, sessionRequest, this.httpOptions)
      .pipe(catchError(this.handleError<SessionResponse>(`session request`)));
  }

  listTables(keyspaceRequest: KeyspaceRequest): Observable<KeyspaceResponse> {
    return this.http.post<KeyspaceResponse>(this.backendUrl + "/keyspace", keyspaceRequest, this.httpOptions)
      .pipe(catchError(this.handleError<KeyspaceResponse>(`keyspace request`)));
  }

  queryTable(tableRequest: TableRequest): Observable<TableResponse> {
    return this.http.post<TableResponse>(this.backendUrl + "/table", tableRequest, this.httpOptions)
      .pipe(catchError(this.handleError<TableResponse>(`table request`)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    //this.messageService.add(`HeroService: ${message}`);
  }
}
