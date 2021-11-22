import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { SessionRequest } from '../data/session-request';
import { SessionResponse } from '../data/session-response';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private backendUrl = 'http://localhost:8080/api/cassandra';  // URL to web api
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,) { }

  login(sessionRequest: SessionRequest): Observable<SessionResponse> {
    return this.http.post<SessionResponse>(this.backendUrl, sessionRequest, this.httpOptions)
      .pipe(catchError(this.handleError<SessionResponse>(`session request`)));
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
