import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { KeyspaceComponent } from './keyspace/keyspace.component';
import { TableComponent } from './table/table.component';
import { TableMetadataComponent } from './table-metadata/table-metadata.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
