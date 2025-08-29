import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Person } from '../models/person';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PeopleService {
  private base = environment.apiBaseUrl + '/person';

  constructor(private http: HttpClient) {}

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.base);
  }

 getPerson(id: string): Observable<Person> {
  return this.http.get<Person>(`${this.base}/${id}`);
  }
  update(id: string, payload: Partial<Person>): Observable<Person> {
    return this.http.put<Person>(`${this.base}/${id}`, payload);
  }
  delete(id: string): Observable<any> {
    return this.http.delete(`${this.base}/${id}`);
  }

  create(payload: Partial<Person>): Observable<Person> {
    return this.http.post<Person>(this.base, payload);
  }


}