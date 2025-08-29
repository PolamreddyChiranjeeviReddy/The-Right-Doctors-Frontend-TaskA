import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html'
})
export class PersonDeleteComponent implements OnInit {
  id!: string;
  loading = false;
  error = '';
  name = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private peopleService: PeopleService
  ) {}

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.peopleService.getPerson(this.id).subscribe(p => {
      this.name = (p && p.name) ? p.name : '';
    });
  }

  confirmDelete(): void {
    this.loading = true;
    this.peopleService.delete(this.id).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/people']);
      },
      error: err => {
        this.error = (err && err.message) ? err.message : 'Failed to delete';
        this.loading = false;
      }
    });
  }
}