import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeyspaceComponent } from './keyspace/keyspace.component';
import { SessionComponent } from './session/session.component';
import { TableComponent } from './table/table.component';
import { TableDataComponent } from './table-data/table-data.component';

const routes: Routes = [
  { path: '', redirectTo: '/session', pathMatch: 'full' },
  { path: 'session', component: SessionComponent },
  { path: 'keyspace', component: KeyspaceComponent },
  { path: 'table', component: TableComponent },
  { path: 'data', component: TableDataComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
