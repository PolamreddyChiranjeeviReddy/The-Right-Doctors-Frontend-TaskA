import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <div class="toolbar">
      <div class="container"><h1>The Right Doctors Persons Crud Operation Quiz Assisgment APP</h1></div>
    </div>
    <div class="container">
      <app-nav></app-nav>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
