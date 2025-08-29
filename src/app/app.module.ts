import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PersonEditComponent } from './components/person-edit/person-edit.component';
import { PersonDeleteComponent } from './components/person-delete/person-delete.component';
import { PersonCreateComponent } from './components/person-create/person-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PeopleListComponent,
    PersonEditComponent,
    PersonDeleteComponent,
    PersonCreateComponent
  ],
  imports: [ BrowserModule, ReactiveFormsModule, FormsModule, HttpClientModule, AppRoutingModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
