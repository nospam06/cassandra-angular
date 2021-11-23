import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend/backend.service';
import { SessionRequest } from '../data/session-request';
import { SessionResponse } from '../data/session-response';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  sessionRequest: SessionRequest = {url: "localhost", port: 9042};
  sessionResponse: SessionResponse | undefined;

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.backendService.login(this.sessionRequest)
      .subscribe(r => {
        this.sessionResponse = r; 
        this.backendService.sessionResponse = r;
      });
  }
}
