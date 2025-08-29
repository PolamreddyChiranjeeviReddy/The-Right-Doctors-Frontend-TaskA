import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PersonEditComponent } from './components/person-edit/person-edit.component';
import { PersonDeleteComponent } from './components/person-delete/person-delete.component';
import { PersonCreateComponent } from './components/person-create/person-create.component';

const routes: Routes = [
  { path: '', redirectTo: 'people', pathMatch: 'full' },
  { path: 'people', component: PeopleListComponent },
  { path: 'people/new', component: PersonCreateComponent },      // optional
  { path: 'people/:id/edit', component: PersonEditComponent },
  { path: 'people/:id/delete', component: PersonDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
