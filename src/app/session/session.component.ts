import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend/backend.service';
import { SessionRequest } from '../data/session-request';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  sessionRequest: SessionRequest = {url: "localhost", port: 9042};

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.backendService.login(this.sessionRequest);
  }
}
