import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionComponent } from './session/session.component';
import { KeyspaceComponent } from './keyspace/keyspace.component';
import { TableComponent } from './table/table.component';
import { TableDataComponent } from './table-data/table-data.component';

@NgModule({
  declarations: [
    AppComponent,
    SessionComponent,
    KeyspaceComponent,
    TableComponent,
    TableDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
