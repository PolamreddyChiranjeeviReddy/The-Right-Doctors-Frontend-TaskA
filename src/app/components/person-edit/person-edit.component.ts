import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { PeopleService } from '../../services/people.service';
import { Person } from '../../models/person';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html'
})
export class PersonEditComponent implements OnInit {
  id!: string;
  loading = false;
  error = '';
  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    age: [''],
    gender: ['Other'],
    mobile: ['']
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private peopleService: PeopleService
  ) {}

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.loading = true;
    this.peopleService.getPerson(this.id).subscribe({
      next: (person: Person) => {
        if (person) {
          this.form.patchValue({
            name: person.name,
            age: person.age,
            gender: person.gender ? person.gender : 'Other',
            mobile: person.mobile
          });
        } else {
          this.error = 'Person not found';
        }
        this.loading = false;
      },
      error: err => {
        this.error = (err && err.message) ? err.message : 'Failed to load';
        this.loading = false;
      }
    });
  }

  save(): void {
    if (this.form.invalid) return;
    this.loading = true;
    this.peopleService.update(this.id, this.form.value).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/people']);
      },
      error: err => {
        this.error = (err && err.message) ? err.message : 'Failed to save';
        this.loading = false;
      }
    });
  }
}