import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionComponent } from './session/session.component';
import { KeyspaceComponent } from './keyspace/keyspace.component';
import { TableComponent } from './table/table.component';
import { TableMetadataComponent } from './table-metadata/table-metadata.component';

@NgModule({
  declarations: [
    AppComponent,
    SessionComponent,
    KeyspaceComponent,
    TableComponent,
    TableMetadataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
