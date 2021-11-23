import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend/backend.service';
import { SessionRequest } from '../data/session-request';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  sessionRequest: SessionRequest = {url: "localhost", port: 9042};

  constructor(private backendService: BackendService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.backendService.login(this.sessionRequest)
      .subscribe(r => {
        this.backendService.sessionResponse = r;
        this.next();
      });
  }

  next(): void {
    this.router.navigateByUrl("/keyspace")
  }
}
