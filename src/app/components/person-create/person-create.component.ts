import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html'
})
export class PersonCreateComponent {
  loading = false;
  error = '';
  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    age: [''],
    gender: ['Other'],
    mobile: ['']
  });

  constructor(private fb: FormBuilder, private peopleService: PeopleService, private router: Router) {}

  create(): void {
    if (this.form.invalid) return;
    this.loading = true;
    this.peopleService.create(this.form.value).subscribe({
      next: () => { this.loading = false; this.router.navigate(['/people']); },
      error: err => { 
  this.error = (err && err.message) ? err.message : 'Failed to create'; 
  this.loading = false; 
}

    });
  }
}
