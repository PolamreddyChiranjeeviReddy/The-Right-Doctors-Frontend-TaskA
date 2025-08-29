import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { Person } from '../../models/person';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html'
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [];
  loading = false;
  error = '';

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void { this.fetch(); }

  fetch(): void {
    this.loading = true;
    this.peopleService.getPeople().subscribe({
      next: data => { this.people = data || []; this.loading = false; },
      error: err => { 
        this.error = (err && err.message) ? err.message : 'Failed to load'; 
        this.loading = false; 
      }
    });
  }
}